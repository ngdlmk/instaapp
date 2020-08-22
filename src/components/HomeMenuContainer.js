import React from "react"
import { View, ScrollView } from "react-native"
import {HomeMenuItem} from "./HomeMenuItem";
import { useNavigation } from '@react-navigation/native';

export const HomeMenuContainer = () => {
    const nav = useNavigation()
    return (
        <ScrollView contentContainerStyle={{}} style={{width: '100%', alignSelf: 'center'}}>
            <HomeMenuItem 
                icon="firefox"
                menuName="Gizli Hikaye İzle"
                color="#ED7632"
                onPress={() => nav.navigate("GizliHikaye")}
            />
            <HomeMenuItem 
                icon="eye"
                menuName="Beni Stalklayanlar"
                color="#419B95"
                onPress={() => nav.navigate("Stalklayanlar")}
            />
            <HomeMenuItem 
                icon="window-close-o"
                menuName="Beni Engelleyenler"
                color="#FABD3E"
                onPress={() => nav.navigate("Engelleyenler")}
            />
            <HomeMenuItem 
                icon="user-times"
                menuName="Takibi Bırakanlar"
                color="#ACDBFF"
                onPress={() => nav.navigate("TakibiBirakanlar")}
            />
            <HomeMenuItem 
                icon="balance-scale"
                menuName="Geri Takip Etmeyenler"
                color="#ed1c24"
                onPress={() => nav.navigate("GeriTakipEtmeyenler")}
            />
        </ScrollView>
    )
}