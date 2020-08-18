import React, { useState } from "react"
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native"
import { ProfileCard } from "../components/ProfileCard";
import { FollowerCard } from "../components/FollowerCard";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getState } from "../state/AppContext";
import WithTabs from "../components/WithTabs";
import { ProfileInfo } from "../components/ProfileInfo";
import { Searchbar } from "../components/Searchbar";
import { Tabs } from "../components/Tabs";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)'
}

const Home = props => {
    const [activeTab, setActiveTab] = useState("followers")
    const [searchTerm, setSearchTerm] = useState("")
    const [{ followers, user }, dispatch] = getState()

    const checkFavoriteCount = () => {
        let count = 0
        followers.forEach(follower => {
            if (follower.isFavorite)
                count++
        })
        return count
    }
    const handleFollow = (index) => {
        const newFollowers = [...followers]
        const favoriteCount = checkFavoriteCount()
        if((!newFollowers[index].isFavorite && favoriteCount < 5) || newFollowers[index].isFavorite ) {
            newFollowers[index].isFavorite = !newFollowers[index].isFavorite
            dispatch({
                type: "UPDATE_FOLLOWERS",
                payload: newFollowers
            })
        } else {
            Alert.alert("Insta App", "You cannot add more than 5 account")
        }
    }

    const handleMenu = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <WithTabs
                selectedTab="home"
                navigation={props.navigation}
                color="white"
            >
                <TouchableOpacity onPress={handleMenu} style={{ position: 'absolute', zIndex: 2, width: 24, height: 24, top: 10, right: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="bars" style={{ color: colors.strongColor, fontSize: 24 }} />
                </TouchableOpacity>
                <ProfileCard 
                    imageUrl={user.imgUrl} 
                    username={user.username}
                    fullname={user.fullname}
                />
                <ProfileInfo />

                <Tabs
                    activeTab={activeTab}
                    onTapFavorites={() => setActiveTab('favorites')}
                    onTapFollowers={() => setActiveTab('followers')}
                />
                <Searchbar
                    placeHolder={activeTab === 'followers' ? 'Search in followers' : 'Search in favorites'}
                    onChangeText={(term) => setSearchTerm(term)}
                />
                <ScrollView
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: 'white',
                        paddingHorizontal: 15
                    }}
                >
                    {
                        followers.map((follower, index) => {
                            if (activeTab === 'favorites' && follower.isFavorite && follower.username.search(searchTerm) !== -1) {
                                return (
                                    <FollowerCard
                                        key={follower.id}
                                        imgUrl={follower.imgUrl}
                                        username={follower.username}
                                        fullname={follower.fullname}
                                        isFavorite={follower.isFavorite}
                                        onPressFollow={() => handleFollow(index)}
                                    />
                                )
                            }
                            if (activeTab === 'followers' && follower.username.search(searchTerm) !== -1) {
                                return (
                                    <FollowerCard
                                        key={follower.id}
                                        imgUrl={follower.imgUrl}
                                        username={follower.username}
                                        fullname={follower.fullname}
                                        isFavorite={follower.isFavorite}
                                        onPressFollow={() => handleFollow(index)}
                                    />
                                )
                            }
                        })
                    }
                </ScrollView>
            </WithTabs>
        </SafeAreaView>
    )
}

export default Home