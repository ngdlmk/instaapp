import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import Map from '../screens/Map'
import BecomePremium from "../screens/BecomePremium";
import RateUs from "../screens/RateUs";
import ReportProblem from "../screens/ReportProblem";
import WishAndComplaint from "../screens/WishAndComplaint";
import TermOfUse from "../screens/TermOfUse";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import { SideMenu } from "../components/SideMenu";
import { getState } from "../state/AppContext";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
const menuItems = [
    {
        id: 1,
        label: "Become Premium",
        route: "BecomePremium"
    },
    {
        id: 2,
        label: "Rate us",
        route: "RateUs"
    },
    {
        id: 3,
        label: "Report a Problem",
        route: "ReportProblem"
    },
    {
        id: 4,
        label: "Wish and Complaint",
        route: "WishAndComplaint"
    },
    {
        id: 5,
        label: "Term of Use",
        route: "TermOfUse"
    },
    {
        id: 6,
        label: "Privacy Policy",
        route: "PrivacyPolicy"
    },
]

const RightMenu = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="BecomePremium"
                component={BecomePremium}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RateUs"
                component={RateUs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="WishAndComplaint"
                component={WishAndComplaint}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ReportProblem"
                component={ReportProblem}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="TermOfUse"
                component={TermOfUse}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicy}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

const Root = () => {
    const [{ user }] = getState()
    const SideMenuPlace = (props) => {
        return (
            <SideMenu user={user}>
                {
                    menuItems.map(item => {
                        return (
                            <DrawerItem
                                key={item.id}
                                onPress={() => props.navigation.navigate(item.route)}
                                label={item.label}
                            />
                        )
                    })
                }
            </SideMenu>
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerPosition="right" drawerContent={SideMenuPlace} initialRouteName="RightMenu">
                <Drawer.Screen
                    name="RightMenu"
                    component={RightMenu}
                />
                <Drawer.Screen
                    name="Map"
                    component={Map}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Root