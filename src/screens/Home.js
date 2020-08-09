import React, { useEffect } from "react"
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native"

const Home = props => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                stickyHeaderIndices={[0]}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: 'black',
                    paddingHorizontal: 15
                }}
            >
                <ProfileCard />
                <ProfileInfo />
                <Text style={{
                    fontSize: 20,
                    color: '#DDDDDD',
                    lineHeight: 20,
                    paddingVertical: 20,
                    fontWeight: '400'
                }}>
                    Followers(124)
                </Text>
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
            </ScrollView>
        </SafeAreaView>
    )
}

const ProfileImage = ({
    imgUrl = "https://i.pinimg.com/originals/8a/83/4c/8a834c80c6d2c39f40f4bbc4b57c26d3.jpg"
}) => {
    return (
        <View style={{
            marginTop: 10,
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "#FF6250",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                source={{ uri: imgUrl }}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                }}
                resizeMode='cover'
            />
        </View>
    )
}

const ProfileCard = ({ imageUrl }) => {
    return (
        <View style={{
            width: "100%",
            flexDirection: 'row',
            paddingVertical: 15,
            backgroundColor: 'black'
        }}>
            <ProfileImage
                imgUrl={imageUrl}
            />
            <View style={{
                justifyContent: 'center',
                paddingLeft: 12
            }}>
                <Text style={{
                    fontSize: 24,
                    color: 'white',
                    lineHeight: 24,
                    paddingVertical: 6,
                    fontWeight: '600'
                }}>
                    Miranda Kerr
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: '#979EAD',
                        lineHeight: 16,
                        paddingVertical: 6,
                        fontWeight: '400'
                    }}>
                    Founder and CEO
                </Text>
            </View>
        </View>
    )
}

const ProfileInfo = ({ }) => {
    return (
        <View style={{
            borderRadius: 25,
            borderWidth: 2,
            borderColor: '#25292D',
            width: "100%",
            height: 80,
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 1,
                marginVertical: 6,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: '#FF6250',
                        lineHeight: 24,
                        paddingVertical: 3,
                        fontWeight: '600'
                    }}
                >
                24
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#979EAD',
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '500'
                    }}
                >
                Posts
                </Text>
            </View>
            <View style={{
                flex: 1,
                marginVertical: 6,
                borderColor: '#25292D',
                borderLeftWidth: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: '#FF6250',
                        lineHeight: 24,
                        paddingVertical: 3,
                        fontWeight: '600'
                    }}
                >
                124
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#979EAD',
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '500'
                    }}
                >
                Followers
                </Text>
            </View>
            <View style={{
                flex: 1,
                marginVertical: 6,
                borderColor: '#25292D',
                borderLeftWidth: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 24,
                        color: '#FF6250',
                        lineHeight: 24,
                        paddingVertical: 3,
                        fontWeight: '600'
                    }}
                >
                12
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#979EAD',
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '500'
                    }}
                >
                Follow
                </Text>
            </View>
        </View>
    )
}

const FollowerCard = ({ 
    imgUrl = "https://i.pinimg.com/originals/8a/83/4c/8a834c80c6d2c39f40f4bbc4b57c26d3.jpg",
    username = "mirandakerr",
    fullname = "Miranda Kerr"
}) => {
    return (
        <View style={{
            borderRadius: 25,
            borderWidth: 2,
            backgroundColor: '#22262B',
            width: "100%",
            height: 80,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image
                source={{ uri: imgUrl }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginLeft: 10
                }}
                resizeMode='cover'
            />
            <View style={{
                marginLeft: 10
            }}>
                <Text
                    style={{
                        fontSize: 18,
                        color: '#8A93A1',
                        lineHeight: 20,
                        paddingVertical: 3,
                        fontWeight: '400'
                    }}
                >
                {username}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: '#5B606A',
                        lineHeight: 14,
                        paddingVertical: 3,
                        fontWeight: '400'
                    }}
                >
                {fullname}
                </Text>
            </View>
        </View>
    )
}

export default Home