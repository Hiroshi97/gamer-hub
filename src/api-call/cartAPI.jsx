import { DATABASE_NAME } from "../constants";
import axios from "axios";

export const updateCart = async () => {
    const {localId, idToken}  = JSON.parse(localStorage.getItem('user'));
    const url = `https://${DATABASE_NAME}.firebaseio.com/users/${localId}.json?auth=${idToken}`;
    const currCart = JSON.parse(localStorage.getItem('cart'));
    await axios.put(url, {cart: currCart});
}