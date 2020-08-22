import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)',
    textStrong: "white",
    textLight: "#f3ffff"
}

export const ScrollMenuItem = ({
    icon="home",
    menuName="main manu",
    value="39",
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: 'white',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 26
        }}>
            <Icon name={icon} style={{color: 'rgba(0,0,0,0.6)', fontSize: 24, marginRight: 5}} />
            <View style={{
                marginLeft: 0,
                flex: 1
            }}>
                <Text
                    style={{
                        fontSize: 15,
                        color: 'black',
                        lineHeight: 20,
                        paddingVertical: 3,
                        fontWeight: '400',
                        marginLeft: 4
                    }}
                >
                    {`${value} ${menuName}`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}