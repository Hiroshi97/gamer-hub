import AuthReducers from './AuthReducers';
import GameReducers from './GameReducers';
import CartReducers from './CartReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    authState: AuthReducers,
    gameState: GameReducers,
    cartState: CartReducers
})

export default allReducers;
