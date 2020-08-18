import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)'
}

export const Tabs = ({ activeTab, onTapFollowers, onTapFavorites }) => {
    return (
        <View style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            borderColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: 1,
            marginBottom: 20,
            backgroundColor: 'white'
        }}>
            <TouchableOpacity onPress={onTapFollowers} style={{ height: "100%", width: 150, justifyContent: 'center', alignItems: 'center', borderColor: colors.strongColor, borderBottomWidth: activeTab === 'followers' ? 3 : 0 }}>
                <Text style={{ color: activeTab === 'followers' ? colors.strongColor : colors.lightColor, fontSize: 16, fontWeight: 'bold' }}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onTapFavorites} style={{ height: "100%", width: 150, justifyContent: 'center', alignItems: 'center', borderColor: colors.strongColor, borderBottomWidth: activeTab === 'favorites' ? 3 : 0 }}>
                <Text style={{ color: activeTab === 'favorites' ? colors.strongColor : colors.lightColor, fontSize: 16, fontWeight: 'bold' }}>Favorites</Text>
            </TouchableOpacity>
        </View>
    )
}