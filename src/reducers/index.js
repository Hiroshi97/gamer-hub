import AuthReducer from './AuthReducers';
import LoadingReducers from './LoadingReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    authState: AuthReducer,
    isLoading: LoadingReducers
})

export default allReducers;
