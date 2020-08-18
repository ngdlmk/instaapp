import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TermOfUse = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
                TermOfUse
            </Text>
        </View>
    )
}

export default TermOfUse