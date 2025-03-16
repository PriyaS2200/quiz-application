import { auth } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = (email,password) => async(dispatch) => {
   let userCredentials = await createUserWithEmailAndPassword(auth,email,password);
   dispatch({type: LOGIN_SUCCESS,payload: userCredentials.user})
}