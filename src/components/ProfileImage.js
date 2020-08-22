import React from "react"
import { View, Image } from "react-native"

export const ProfileImage = ({
    imgUrl = "https://i.pinimg.com/originals/8a/83/4c/8a834c80c6d2c39f40f4bbc4b57c26d3.jpg"
}) => {
    return (
        <View style={{
            marginTop: 10,
            width: 100,
            height: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5
        }}>
            <Image
                source={{ uri: imgUrl }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                }}
                resizeMode='cover'
            />
        </View>
    )
}