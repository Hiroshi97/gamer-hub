import React, { useContext, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { AuthContext } from '../../../contexts';

export default function Logout() {
    const {userData, setUserData} = useContext(AuthContext);
    useEffect(() => {
        localStorage.clear();
        setUserData(null);
    }, [])
    
    return (<Redirect to={{pathname: '/'}} />);
}
