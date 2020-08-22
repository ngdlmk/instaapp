import React, { useState } from "react"
import { SafeAreaView, ScrollView, Alert } from "react-native"
import { FollowerCard } from "../components/FollowerCard";
import { getState } from "../state/AppContext";
import WithTabs from "../components/WithTabs";
import { Searchbar } from "../components/Searchbar";
import { Tabs } from "../components/Tabs";

const colors = {
    strongColor: 'rgba(74,131,183,1)',
    lightColor: 'rgba(74,131,183,0.4)'
}

const Followers = props => {
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
                selectedTab="followers"
                navigation={props.navigation}
                color="white"
            >
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

export default Followers