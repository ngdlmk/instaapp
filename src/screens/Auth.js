import React from "react"
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native"
import instagramLogo from "../assets/images/instagram.png";

const Auth = props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                flex: 1, 
                backgroundColor:'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity 
                    onPress={() => props.navigation.navigate("Home")}
                    style={{
                        backgroundColor: 'white',
                        width: 300,
                        height: 50,
                        borderRadius: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'purple',
                        borderWidth: 2
                    }}
                >
                    <Text style={{
                        color: 'purple',
                        fontSize: 18,
                        fontWeight: '600'
                    }}>
                        Login with Instagram
                    </Text>
                    <Image 
                        source={instagramLogo}
                        style={{
                            width: 28,
                            height: 28,
                            marginLeft: 10
                        }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Auth