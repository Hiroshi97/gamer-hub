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

    const updateName = await userUpdateInfo({idToken: res.data.idToken, displayName: userInfo.name});

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

//UPDATE USER INFO AFTER REGISTRATION
export const userUpdateInfo = async (info) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY;

    const res = await axios.post(url, info);

    return res.data;
};
