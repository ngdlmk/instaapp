import React from "react";
import { View } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { DrawerContentScrollView } from '@react-navigation/drawer';

export const SideMenu = (props) => {
    const {user} = props
    return (
        <DrawerContentScrollView style={{backgroundColor: 'rgba(74,131,183,1)'}}>
            <ProfileCard 
                imageUrl={user.imgUrl} 
                username={user.username}
                fullname={user.fullname}
            />
            <View>
                {props.children}
            </View>
        </DrawerContentScrollView>
    )
}