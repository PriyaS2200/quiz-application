import { FETCH_QUESTIONS } from "../actions/quizAction"

const initial = { quiz:[] }
export const quizReducer = (state=initial,action) => {
    switch(action.type) {
        case FETCH_QUESTIONS:
            return {...state,quiz: action.payload}
        default: return state
    }
}