import userReducer from "./user"
import followersReducer from "./followers";
export default ({user, followers}, action) => ({
    user: userReducer(user, action),
    followers: followersReducer(followers, action)
})