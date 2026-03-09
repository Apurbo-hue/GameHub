import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user ,loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return;
    }
    
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>


};

export default PrivateRouter;