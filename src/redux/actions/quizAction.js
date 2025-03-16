import axios from "axios";

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_ANSWERS = 'SET_ANSWERS';

export const fetch = () => async (dispatch) => {
    let response = await axios.get('https://unique-melodious-wrist.glitch.me/api/questions')
    let data = response.data;
    dispatch({type: FETCH_QUESTIONS, payload: data});
}

