import React from "react";
import { View } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { DrawerContentScrollView } from '@react-navigation/drawer';

export const SideMenu = (props) => {
    const {user} = props
    return (
        <DrawerContentScrollView>
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