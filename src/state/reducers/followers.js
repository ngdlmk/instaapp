import INITIAL_STATE from "../initial/followers";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_FOLLOVERS':
            return action.payload
        default:
            return state
    }
}