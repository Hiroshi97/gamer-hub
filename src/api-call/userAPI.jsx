import { API_KEY, DATABASE_NAME } from "../constants";
import axios from "axios";

//SIGN UP
export const userSignUp = async (userInfo) => {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;

  const request = {
    email: userInfo.email,
    password: userInfo.password,
    returnSecureToken: true,
  };

  const res = await axios.post(url, request);

  const updateName = await userUpdateInfo(
    { idToken: res.data.idToken, displayName: userInfo.name },
    res.data.refreshToken
  );

  const getInfo = await userGetInfo(updateName.idToken);

  await fetchUserCart(getInfo.users[0].localId, updateName.idToken);

  return { ...getInfo.users[0], idToken: updateName.idToken, refreshToken: updateName.refreshToken };
};

//LOGIN
export const userLogin = async (email, password) => {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    API_KEY;

  const request = {
    email,
    password,
    returnSecureToken: true,
  };

  const res = await axios.post(url, request);

  const getInfo = await userGetInfo(res.data.idToken);

  await fetchUserCart(getInfo.users[0].localId, res.data.idToken);

  return { ...getInfo.users[0], idToken: res.data.idToken, refreshToken: res.data.refreshToken };
};

//UPDATE USER INFO AFTER REGISTRATION
export const userUpdateInfo = async (info, refreshToken) => {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" + API_KEY;

  const res = await axios.post(url, info);

  const newToken = await userRevokeRefreshToken(refreshToken); //Refresh token to get a new token of updated profile

  return {
    ...res.data,
    idToken: newToken.id_token,
    refreshToken: newToken.refresh_token,
  };
};

//GET USER INFO
export const userGetInfo = async (idToken) => {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + API_KEY;

  const res = await axios.post(url, { idToken });

  return res.data;
};

//REVOKE REFRESH TOKEN
export const userRevokeRefreshToken = async (refreshToken) => {
  const url = "https://securetoken.googleapis.com/v1/token?key=" + API_KEY;

  const request = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  const res = await axios.post(url, request);

  return res.data;
};

//FETCH USER'S EXISTING CART
export const fetchUserCart = async (uid, idToken) => {
  const url = `https://${DATABASE_NAME}.firebaseio.com/users/${uid}.json?auth=${idToken}`;

  const { data } = await axios.get(url);

  if (data && data.cart.length > 0) {
    if (
      "cart" in localStorage &&
      JSON.parse(localStorage.getItem("cart")).length > 0
    ) {
      let currCart = JSON.parse(localStorage.getItem("cart"));
      data.cart.forEach((item) => {
        let index = currCart.findIndex((currItem) => currItem.id === item.id);
        if (index !== -1) {
          currCart[index].qty += item.qty;
        } else {
          currCart.push(item);
        }
      });
      await axios.patch(url, { cart: currCart });
      let length = currCart.reduce((total, item) => total + item.qty, 0);
      localStorage.setItem("cart", JSON.stringify(currCart));
      localStorage.setItem("cart-length", length);
    } else {
      let length = data.cart.reduce((total, item) => total + item.qty, 0);
      localStorage.setItem("cart", JSON.stringify(data.cart));
      localStorage.setItem("cart-length", length);
    }
  } else {
    console.log("ABC");
    if (
      "cart" in localStorage &&
      JSON.parse(localStorage.getItem("cart")).length > 0
    ) {
      let currCart = JSON.parse(localStorage.getItem("cart"));
      await axios.put(url, { cart: currCart });
    }
  }
};
