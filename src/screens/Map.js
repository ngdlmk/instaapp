import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, Image } from "react-native"
import WithTabs from "../components/WithTabs";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { getState } from "../state/AppContext"

const Map = props => {
    const [{ followers }] = getState()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <WithTabs
                selectedTab="map"
                navigation={props.navigation}
                color="white"
            >
                <View style={{ flex: 1 }}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        region={{
                            latitude: 41.01766,
                            longitude: 28.97438,
                            latitudeDelta: 0.15,
                            longitudeDelta: 0.121,
                        }}
                    >
                        {
                            followers.map(f => {
                                if(f.isFavorite) {
                                    return (
                                        <UserPin 
                                            key={f.id}
                                            coords={f.coordinate}
                                            username={f.username}
                                            profileImg={f.imgUrl}
                                        />
                                    )
                                } else null
                            })
                        }
                    </MapView>
                </View>
            </WithTabs>
        </SafeAreaView>
    )
}

const UserPin = ({ profileImg, username, coords }) => {
    return (
        <Marker onPress={() => alert(username)}  pinColor="blue" coordinate={coords}>
            <View style={{
                height: 52,
                width: 52,
                borderRadius: 26,
                borderWidth: 4,
                borderColor: 'orange',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                    source={{uri:profileImg}}
                    resizeMode="cover"
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 25
                    }}
                />
            </View>
        </Marker>
    )
}

export default Map