import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)',
    textStrong: "white",
    textLight: "#f3ffff"
}

export const HomeMenuItem = ({
    icon="home",
    menuName="main manu",
    color = "red",
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            borderBottomWidth: 1,
            backgroundColor: 'white',
            borderColor: "rgba(221,221,221,0.5)",
            width: "100%",
            height: 80,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{height: '50%', width:3, backgroundColor: color, marginLeft: 30}}></View>
            <Icon name={icon} style={{color: 'rgba(0,0,0,0.6)', fontSize: 24, marginHorizontal: 20}} />
            <View style={{
                marginLeft: 10,
                flex: 1
            }}>
                <Text
                    style={{
                        fontSize: 15,
                        color: 'black',
                        lineHeight: 20,
                        paddingVertical: 3,
                        fontWeight: '400'
                    }}
                >
                    {menuName}
                </Text>
            </View>
            <Icon name="chevron-right" style={{color: 'rgba(0,0,0,0.6)', fontSize: 20, marginRight: 20}} />
        </TouchableOpacity>
    )
}