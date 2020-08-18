import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const PrivacyPolicy = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            PrivacyPolicy
            </Text>
        </View>
    )
}

export default PrivacyPolicy