import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import CardBase from "./CardBase"
import ResponsiveImage from "./ResponsiveImage"
import Icon from "react-native-vector-icons/FontAwesome5";

const StorieCard = ({headerText, priceText, contentText, cardColor, imgSource}) => {
    return (
        <CardBase 
            width="80%"
            height={150}
            cardColor={cardColor}
        >
            <View style={{flex: 1}}>
                <View style={{position: 'absolute', top: 40, right: '2%'}}>
                    <ResponsiveImage 
                        imgWidth={100}
                        imgSource={imgSource}
                        opacity={0.1}
                    />
                </View>
                <View style={{flex: 0.3, width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text 
                            style={{
                                fontWeight: 'bold', 
                                color: '#573753', 
                                fontSize: 16,
                                marginLeft: 20,
                                width: '84%',
                            }}>
                            {headerText}
                        </Text>
                    </View>
                    {/* <TouchableOpacity style={{width: 44, height: 44, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon name="trash-alt" style={{ fontSize: 20, color: 'gray' }} solid />
                    </TouchableOpacity> */}
                </View>
                <View style={{flex: 0.5}}>
                <Text 
                    style={{
                        color: '#573753', 
                        fontSize: 14,
                        marginLeft: 20,
                        fontWeight: '600',
                        width: '84%',
                    }}>
                    {contentText}
                </Text>
                </View>
                <View style={{flex: 0.2}}>
                    <Text 
                        style={{
                            fontWeight: '900', 
                            color: '#ff6b2e', 
                            fontSize: 14,
                            marginLeft: 20,
                            width: '84%',
                        }}>
                        {priceText}
                    </Text>
                </View>
            </View>
        </CardBase>
    )
}

export default StorieCard