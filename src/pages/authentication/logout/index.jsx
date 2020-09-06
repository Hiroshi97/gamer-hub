import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { LogoutSuccess } from '../../../actions/AuthActions';
import {useDispatch} from 'react-redux';
import { ClearCart } from '../../../actions/CartActions';
import { triggerAlert } from '../../../utils/trigger-alert';

export default function Logout() {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.clear();
        dispatch(LogoutSuccess());
        dispatch(ClearCart());
        triggerAlert('success', 'LOG OUT SUCCESSFUL', 'You have logged out successfully!')
    }, [])
    
    return (<Redirect to={{pathname: '/'}} />);
}
