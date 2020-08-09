import React from "react"
import { View, Text } from "react-native"
import CardBase from "./CardBase"
import ResponsiveImage from "./ResponsiveImage"

const CreditCard = ({headerText, priceText, contentText, cardColor, imgSource}) => {
    return (
        <CardBase 
            width="80%"
            height={150}
            cardColor={cardColor}
        >
            <View style={{flex: 1, padding: 10}}>
                <View style={{position: 'absolute', top: 50, right: '2%'}}>
                    <ResponsiveImage 
                        imgWidth={100}
                        imgSource={imgSource}
                        opacity={0.8}
                    />
                </View>
                <View style={{flex: 0.3, justifyContent: 'center'}}>
                    <Text 
                        style={{
                            fontWeight: 'bold', 
                            color: '#573753', 
                            fontSize: 24,
                            marginLeft: 20,
                        }}>
                        {headerText}
                    </Text>
                </View>
                <View style={{flex: 0.5}}>
                <Text 
                    style={{
                        color: '#573753', 
                        fontSize: 12,
                        marginLeft: 20
                    }}>
                    {contentText}
                </Text>
                </View>
                <View style={{flex: 0.2}}>
                    <Text 
                        style={{
                            fontWeight: 'bold', 
                            color: '#ff6b2e', 
                            fontSize: 18,
                            marginLeft: 20
                        }}>
                        {priceText}
                    </Text>
                </View>
            </View>
        </CardBase>
    )
}

export default CreditCard