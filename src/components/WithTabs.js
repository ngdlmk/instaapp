import React from "react"
import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";

//home, credits, me, stories, send 
const { width } = Dimensions.get("window")
const tabWidth = width / 3
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
                height: 80,
                flexDirection: 'row',
                alignItems: 'flex-end',
                backgroundColor: color
            }}>
                {/* <Tab 
                    isSelected={selectedTab === 'home' ? true : false}
                    iconName="home"
                    menuName="Home"
                    onPress={() => navigation.navigate("Home")}
                /> */}
                <Tab 
                    isSelected={selectedTab === 'stories' ? true : false} 
                    iconName="firefox"
                    menuName="Stories"
                    onPress={() => navigation.navigate("Stories")}
                />
                <TabCircle 
                    isSelected={selectedTab === 'send' ? true : false} 
                    iconName="paper-plane"
                    onPress={() => navigation.navigate("Send")}
                />
                {/* <Tab 
                    isSelected={selectedTab === 'me' ? true : false} 
                    iconName="user-secret"
                    menuName="Me"
                    onPress={() => navigation.navigate("Me")}
                /> */}
                <Tab 
                    isSelected={selectedTab === 'credits' ? true : false} 
                    iconName="coins"
                    menuName="Credits"
                    onPress={() => navigation.navigate("Credits")}
                />
            </View>
        </View>
    )
}

const Tab = ({isSelected, iconName, menuName, onPress}) => {
    return(
        <View style={{borderColor: 'lightgray', borderTopWidth: 1, backgroundColor: '#fefefe', flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ paddingHorizontal: 10, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={iconName} style={{ fontSize: circleTabSize * 0.4, color: isSelected ? '#ffbb00' : '#b6b6b6' }} />
                <Text style={{color: isSelected ? '#ffbb00' : '#b6b6b6', fontSize: 14}}>{menuName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const TabCircle = ({isSelected, iconName, onPress}) => {
    return(
        <View style={{borderColor: 'lightgray', borderTopWidth: 1, backgroundColor: '#fefefe', flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ borderColor: 'lightgray', borderWidth: 1, backgroundColor: '#fefefe', width: circleTabSize, height: circleTabSize, borderRadius: circleTabSize / 2, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={iconName} style={{ fontSize: circleTabSize * 0.4, color: isSelected ? '#ffbb00' : '#b6b6b6' }} solid />
                <Text style={{color: isSelected ? '#ffbb00' : '#b6b6b6', fontSize: 14}}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WithTabs