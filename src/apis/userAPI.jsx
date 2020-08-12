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

    const updateName = await userUpdateInfo({idToken: res.data.idToken, displayName: userInfo.name}, res.data.refreshToken);

    const getInfo = await userGetInfo(updateName.idToken);
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
export const userUpdateInfo = async (info, refreshToken) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY;

    const res = await axios.post(url, info);

    const newToken = await userRevokeRefreshToken(refreshToken); //Refresh token to get a new token of updated profile

    return  {...res.data, idToken: newToken.id_token, refreshToken: newToken.refresh_token};
};

//GET USER INFO
export const userGetInfo = async(idToken) => {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + API_KEY;

    const res = await axios.post(url, {idToken});

    return res.data;
}

//REVOKE REFRESH TOKEN
export const userRevokeRefreshToken = async (refreshToken) => {
    const url = 'https://securetoken.googleapis.com/v1/token?key=' + API_KEY;

    const request = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    };

    const res = await axios.post(url, request);

    return res.data;
}