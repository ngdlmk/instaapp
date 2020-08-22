import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Engelleyenler = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            Engelleyenler
            </Text>
        </View>
    )
}

export default Engelleyenler