import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const BecomePremium = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
                Become Premium
            </Text>
        </View>
    )
}

export default BecomePremium