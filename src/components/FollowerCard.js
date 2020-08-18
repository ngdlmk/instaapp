import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)'
}

export const FollowerCard = ({
    imgUrl = "https://i.pinimg.com/originals/8a/83/4c/8a834c80c6d2c39f40f4bbc4b57c26d3.jpg",
    username = "mirandakerr",
    fullname = "Miranda Kerr",
    isFavorite = false,
    onPressFollow
}) => {
    return (
        <View style={{
            borderRadius: 16,
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: colors.lightColor,
            width: "100%",
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
            elevation: 4
        }}>
            <Image
                source={{ uri: imgUrl }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginLeft: 10,
                    borderColor: colors.strongColor,
                    borderWidth: 2
                }}
                resizeMode='cover'
            />
            <View style={{
                marginLeft: 10,
                flex: 1
            }}>
                <Text
                    style={{
                        fontSize: 18,
                        color: '#8A93A1',
                        lineHeight: 20,
                        paddingVertical: 3,
                        fontWeight: '400'
                    }}
                >
                    {username}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#5B606A',
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '400'
                    }}
                >
                    {fullname}
                </Text>
            </View>
            <TouchableOpacity style={{ width: 24, height: 24, marginRight: 15, borderWidth: 2, borderRadius: 5, borderColor: colors.strongColor, justifyContent: 'center', alignItems: 'center' }} onPress={onPressFollow}>
                {
                    isFavorite ? <Icon name="check" style={{ fontSize: 20, color: colors.strongColor }} solid /> : null
                }
            </TouchableOpacity>
        </View>
    )
}