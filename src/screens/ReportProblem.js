import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ReportProblem = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>BACK</Text>
            </TouchableOpacity>
            <Text>
            ReportProblem
            </Text>
        </View>
    )
}

export default ReportProblem