import React from "react"
import { TouchableOpacity, View } from "react-native"
import { SwipeListView } from "react-native-swipe-list-view"
import StorieCard from "./StorieCard"
import Icon from "react-native-vector-icons/FontAwesome5";

const StorieSwipeList = ({cardData}) => {

    const deleteHandler = (id) => {
        alert(id)
    }

    return (
        <SwipeListView
            data={cardData}
            extraData={cardData}
            keyExtractor={item => item.id}
            stopRightSwipe={-75}
            renderItem={ (data, rowMap) => {
                let cardColor
                let imgSource
                const contentText = data.item.contentText.substring(0, 80) + '...'
                if(data.item.category === 'success') {
                    imgSource = require('../assets/images/success.png')
                    cardColor = "#ffc431"
                }
                if(data.item.category === 'love') {
                    imgSource = require('../assets/images/love.png')
                    cardColor = "#fe5c19"
                }
                if(data.item.category === 'life') {
                    imgSource = require('../assets/images/life.png')
                    cardColor = "#81d3e1"
                }
                return (
                    <StorieCard
                        headerText={data.item.headerText}
                        contentText={contentText}
                        priceText={data.item.date}
                        cardColor={cardColor}
                        imgSource={imgSource}
                    />
                )
            }}
            renderHiddenItem={ (data, rowMap) => {
                let cardColor
                if(data.item.category === 'success') {
                    cardColor = "#ffc431"
                }
                if(data.item.category === 'love') {
                    cardColor = "#fe5c19"
                }
                if(data.item.category === 'life') {
                    cardColor = "#81d3e1"
                }
                return (
                    <HiddenItem 
                        bgColor={cardColor}
                        onDelete={() => deleteHandler(data.item.id)}
                    />
                )
            }}
            rightOpenValue={-75}
            disableRightSwipe
        />
    )
}

const HiddenItem = ({bgColor, onDelete}) => {
    return (
        <View
            style={{
                backgroundColor: bgColor,
                width: '80%',
                height: 150,
                borderRadius: 30,
                marginTop: 20,
                overflow: 'hidden',
                alignSelf: 'center',
                alignItems: 'flex-end'
            }}
            activeOpacity={0.7}
        >
            <TouchableOpacity onPress={onDelete} style={{width: 75, height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Icon name="trash-alt" style={{ fontSize: 40, color: '#ffffff'}} solid />
            </TouchableOpacity>
        </View>
    )
}
export default StorieSwipeList