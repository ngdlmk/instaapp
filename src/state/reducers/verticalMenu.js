import INITIAL_STATE from "../initial/verticalMenu";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MENU':
            return action.payload
        default:
            return state
    }
}