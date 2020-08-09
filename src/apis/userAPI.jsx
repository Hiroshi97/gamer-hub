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

    const getInfo = await userGetInfo({idToken: updateName.idToken});

    return getInfo.users[0];
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

    const getInfo = await userGetInfo(res.data.idToken);

    return getInfo.users[0];
}

//UPDATE USER INFO AFTER REGISTRATION
export const userUpdateInfo = async (info) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY;

    const res = await axios.post(url, info);

    return res.data;
};

//GET USER INFO
export const userGetInfo = async(idToken) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + API_KEY;

    const res = await axios.post(url, {idToken});

    return res.data;
}