import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Stalklayanlar = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            Stalklayanlar
            </Text>
        </View>
    )
}

export default Stalklayanlar