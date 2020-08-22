import React from "react"
import { View, Text, ScrollView } from "react-native"
import { ScrollMenuItem } from "./ScrollMenuItem";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)',
    textStrong: "white",
    textLight: "#f3ffff"
}

export const HorizontalScrollMenu = () => {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
            style={{paddingRight: 20}}
        >
            <ScrollMenuItem 
                icon="th-large"
                menuName="Total Posts"
            />
            <ScrollMenuItem 
                icon="heart"
                menuName="Average Likes"
            />
            <ScrollMenuItem 
                icon="thumbs-o-up"
                menuName="Total Likes"
            />
            <ScrollMenuItem 
                icon="comments"
                menuName="Average Comments"
            />
            <View style={{width: 20}}></View>
        </ScrollView>
    )
}