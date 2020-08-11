import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { LoggedOut, LogoutSuccessful } from '../../../actions/auth.actions';
import {useDispatch} from 'react-redux';

export default function Logout() {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.clear();
        dispatch(LoggedOut());
        dispatch(LogoutSuccessful());
    }, [])
    
    return (<Redirect to={{pathname: '/'}} />);
}
