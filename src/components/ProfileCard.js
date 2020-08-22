import React from "react"
import { View, Text } from "react-native"
import { ProfileImage } from "./ProfileImage";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)',
    textStrong: "white",
    textLight: "#f3ffff"
}

export const ProfileCard = ({ imageUrl, username="Miranda Kerr", fullname="Miranda" }) => {
    return (
        <View style={{
            width: "100%",
            paddingVertical: 15,
            backgroundColor: colors.strongColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ProfileImage
                imgUrl={imageUrl}
            />
            <View style={{
                justifyContent: 'center',
                paddingLeft: 12,
            }}>
                <Text style={{
                    fontSize: 18,
                    color: colors.textStrong,
                    lineHeight: 18,
                    paddingVertical: 6,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 10
                }}>
                    {username}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: colors.textLight,
                        lineHeight: 14,
                        fontWeight: '400',
                        textAlign: 'center'
                    }}>
                    {fullname}
                </Text>
            </View>
        </View>
    )
}