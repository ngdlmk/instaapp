import userReducer from "./user"
import verticalMenuReducer from './verticalMenu'

export default ({user, verticalMenu}, action) => ({
    user: userReducer(user, action),
    verticalMenu: verticalMenuReducer(verticalMenu, action)
})