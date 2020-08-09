import INITIAL_STATE from "../initial/user";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return action.payload
        default:
            return state
    }
}