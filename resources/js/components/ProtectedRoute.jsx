import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    if (!auth.token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;