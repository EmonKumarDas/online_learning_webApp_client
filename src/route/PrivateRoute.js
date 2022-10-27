import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(userContext);
    const location = useLocation();
    if(!user){
        return <Navigate to="/registration" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;