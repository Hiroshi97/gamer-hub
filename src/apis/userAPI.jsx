import {API_KEY} from '../constants/constants';
import axios from 'axios';

//SIGN UP
export const userSignUp = async (userInfo) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;

    const request = {
        email: userInfo.email,
        password: userInfo.password,
        returnSecureToken: true
    }

    const res = await axios.post(url, request);

    return res.data;
}

//LOGIN
export const userLogin = async (email, password) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;

    const request = {
        email,
        password,
        returnSecureToken: true
    }

    const res = await axios.post(url, request);

    return res.data;
}

//SAVE USER INFO AFTER REGISTRATION
export const saveUserInfo = () => {};