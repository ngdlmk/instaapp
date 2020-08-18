import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const WishAndComplaint = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            WishAndComplaint
            </Text>
        </View>
    )
}

export default WishAndComplaint