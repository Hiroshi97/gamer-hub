import AuthReducers from './AuthReducers';
import GameReducers from './GameReducers';
import CartReducers from './CartReducers';
import { combineReducers } from 'redux';
import BillReducers from './BillReducers';

const allReducers = combineReducers({
    authState: AuthReducers,
    gameState: GameReducers,
    cartState: CartReducers,
    billState: BillReducers
})

export default allReducers;
