import React from "react"
import { View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native"
import { ProfileCard } from "../components/ProfileCard";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getState } from "../state/AppContext";
import WithTabs from "../components/WithTabs";
import { ProfileInfo } from "../components/ProfileInfo";
import { HomeMenuContainer } from "../components/HomeMenuContainer";
import { HorizontalScrollMenu } from "../components/HorizontalScrollMenu";
const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)'
}

const Home = props => {
    const [{ user }] = getState()

    const handleMenu = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <WithTabs
                selectedTab="home"
                navigation={props.navigation}
                color="white"
            >
                <View style={{ backgroundColor: colors.strongColor, paddingBottom: 30, borderRadius: 50 }}>
                    <TouchableOpacity onPress={handleMenu} style={{ position: 'absolute', zIndex: 2, width: 24, height: 24, top: 10, right: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="bars" style={{ color: "white", fontSize: 24 }} />
                    </TouchableOpacity>
                    <ProfileCard
                        imageUrl={user.imgUrl}
                        username={user.username}
                        fullname={user.fullname}
                    />
                    <ProfileInfo />
                </View>
                <View style={{ height: 60}}>
                    <HorizontalScrollMenu />
                </View>
                <HomeMenuContainer />
            </WithTabs>
        </SafeAreaView>
    )
}

export default Home