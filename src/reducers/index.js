import AuthReducer from './AuthReducers';
import LoadingReducers from './LoadingReducers';
import CartReducers from './CartReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    authState: AuthReducer,
    isLoading: LoadingReducers,
    cartState: CartReducers
})

export default allReducers;
