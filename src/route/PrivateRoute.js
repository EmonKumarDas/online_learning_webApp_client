import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(userContext);
    if(!user){
        return <Navigate to="/registration"></Navigate>
    }
    return children;
};

export default PrivateRoute;