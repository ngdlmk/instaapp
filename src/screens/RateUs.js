import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const RateUs = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            RateUs
            </Text>
        </View>
    )
}

export default RateUs