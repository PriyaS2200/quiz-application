import { applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { quizReducer } from "./reducers/quizReducer";
import { thunk } from "redux-thunk";
import { legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))