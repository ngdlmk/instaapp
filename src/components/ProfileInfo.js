import React from "react"
import { View, Text } from "react-native"

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)',
    textStrong: "white",
    textLight: "#f3ffff"
}

export const ProfileInfo = ({ 
    postCount=24,
    follwerCount=1123,
    followCount=123
}) => {
    return (
        <View style={{
            width: "100%",
            height: 60,
            flexDirection: 'row',
            marginBottom: 0
        }}>
            <View style={{
                flex: 1,
                marginVertical: 6,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: colors.textStrong,
                        lineHeight: 24,
                        paddingVertical: 3,
                        fontWeight: '600'
                    }}
                >
                    {postCount}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: colors.textLight,
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '500'
                    }}
                >
                    Posts
                </Text>
            </View>
            <View style={{
                flex: 1,
                marginVertical: 6,
                borderColor: '#e7ffff',
                borderLeftWidth: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: colors.textStrong,
                        lineHeight: 24,
                        paddingVertical: 3,
                        fontWeight: '600'
                    }}
                >
                    {follwerCount}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: colors.textLight,
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '500'
                    }}
                >
                    Followers
                </Text>
            </View>
            <View style={{
                flex: 1,
                marginVertical: 6,
                borderColor: '#e7ffff',
                borderLeftWidth: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: colors.textStrong,
                        lineHeight: 24,
                        paddingVertical: 3,
                        fontWeight: '600'
                    }}
                >
                    {followCount}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: colors.textLight,
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '500'
                    }}
                >
                    Follow
                </Text>
            </View>
        </View>
    )
}