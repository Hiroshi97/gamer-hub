import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { LogoutSuccess } from '../../../actions/AuthActions';
import {useDispatch} from 'react-redux';

export default function Logout() {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.clear();
        dispatch(LogoutSuccess());
    }, [])
    
    return (<Redirect to={{pathname: '/'}} />);
}
