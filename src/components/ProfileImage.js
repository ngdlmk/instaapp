import React from "react"
import { View, Image } from "react-native"

export const ProfileImage = ({
    imgUrl = "https://i.pinimg.com/originals/8a/83/4c/8a834c80c6d2c39f40f4bbc4b57c26d3.jpg"
}) => {
    return (
        <View style={{
            marginTop: 10,
            width: 80,
            height: 80,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5
        }}>
            <Image
                source={{ uri: imgUrl }}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                }}
                resizeMode='cover'
            />
        </View>
    )
}