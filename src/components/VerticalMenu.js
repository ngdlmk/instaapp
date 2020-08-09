import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { getState } from "../state/AppContext"

const menuData = [
    {
        id: "0",
        name: 'Full List'
    },
    {
        id: "1",
        name: 'Love'
    },
    {
        id: "2",
        name: 'Success'
    },
    {
        id: "3",
        name: 'Life'
    },
]

const Menu = ({name}) => {
    const [{verticalMenu}, dispatch] = getState()
    const setMenu = (menuName) => {
        dispatch({
            type: 'SET_MENU',
            payload: menuName
        });
    }
    return (
        <TouchableOpacity onPress={() => setMenu(name)} style={{width: 100, height: 100, flexDirection: 'row'}}>
            <View style={{ flex: 0.7, justifyContent: 'center'}}>
            <Text style={{color: '#ffffff', textAlign: 'center', width: 100, fontSize: 20, transform: [{ rotate: '270deg'}] }}>{name}</Text>
            </View>
            <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'center' }}>
                {
                    name === verticalMenu ?
                    <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: '#ffc431'}} /> : null
                }
            </View>
        </TouchableOpacity>
    )
}

const VerticalMenu = () => {
    const menus = menuData.map(menu => {
        return (
            <Menu 
                key={menu.id}
                name={menu.name}
            />
        )
    })
    return (
        <View style={{
            width: 100,
            flexDirection: 'column-reverse'
        }}>
            <View style={{width: 100, height: 50}}></View>
            {menus}
        </View>
    )
}

export default VerticalMenu