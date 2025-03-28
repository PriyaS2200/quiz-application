import { LOGIN_SUCCESS } from "../actions/authAction"

const initialState = {user:""}

export const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, user: action.payload}
        default:
            return state
    }
}