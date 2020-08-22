import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TakibiBirakanlar = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            TakibiBirakanlar
            </Text>
        </View>
    )
}

export default TakibiBirakanlar