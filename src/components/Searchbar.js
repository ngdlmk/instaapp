import React from "react"
import { View, TextInput } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)'
}

export const Searchbar = ({ placeHolder, onChangeText }) => {
    return (
        <View style={{paddingHorizontal: 15, alignSelf: 'center'}}>
            <View
                style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 20,
                    backgroundColor: "rgba(178,182,182,0.2)",
                    marginBottom: 20,
                    flexDirection: "row"
                }}>
                <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="search" style={{ fontSize: 16, color: colors.strongColor }} />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        onChangeText={onChangeText}
                        style={{
                            width: '100%',
                            height: '100%',
                            color: colors.strongColor
                        }}
                        placeholderTextColor={colors.lightColor}
                        placeholder={placeHolder}
                    />
                </View>
            </View>
        </View>
    )
}