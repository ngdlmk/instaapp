import React from "react"
import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";

//home, credits, me, stories, send 
const { width } = Dimensions.get("window")
const tabWidth = width / 2
const circleTabSize = tabWidth > 80 ? 74 : tabWidth - 8

const WithTabs = ({children, selectedTab, color, navigation}) => {

    return(
        <View style={{
            flex: 1
        }}>
            <View style={{flex: 1, backgroundColor: color}}>
                {children}
            </View>
            <View style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'flex-end',
                backgroundColor: color
            }}>
                <Tab 
                    isSelected={selectedTab === 'home' ? true : false} 
                    iconName="home"
                    menuName="Home"
                    onPress={() => navigation.navigate("Home")}
                />
                <Tab 
                    isSelected={selectedTab === 'followers' ? true : false} 
                    iconName="street-view"
                    menuName="Follovers"
                    onPress={() => navigation.navigate("Followers")}
                />
                <Tab 
                    isSelected={selectedTab === 'map' ? true : false} 
                    iconName="map-marked-alt"
                    menuName="Map"
                    onPress={() => navigation.navigate("Map")}
                />
            </View>
        </View>
    )
}

const Tab = ({isSelected, iconName, menuName, onPress}) => {
    return(
        <View style={{borderColor: 'lightgray', borderTopWidth: 1, backgroundColor: '#fefefe', flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ paddingHorizontal: 10, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={iconName} style={{ fontSize: circleTabSize * 0.4, color: isSelected ? '#EEA47FFF' : '#b6b6b6' }} />
                <Text style={{color: isSelected ? '#EEA47FFF' : '#b6b6b6', fontSize: 14}}>{menuName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WithTabs