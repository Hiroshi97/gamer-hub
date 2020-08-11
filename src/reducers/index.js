import AuthReducer from './auth.reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    authState: AuthReducer
})

export default allReducers;
