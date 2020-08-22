import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GizliHikaye = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            Gizli Hikaye
            </Text>
        </View>
    )
}

export default GizliHikaye