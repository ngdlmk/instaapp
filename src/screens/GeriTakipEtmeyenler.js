import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GeriTakipEtmeyenler = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            Geri Takip Etmeyenler
            </Text>
        </View>
    )
}

export default GeriTakipEtmeyenler