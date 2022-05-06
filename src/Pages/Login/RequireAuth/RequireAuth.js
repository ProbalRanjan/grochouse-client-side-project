import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({ children }) => {

    const [
        user,
        loading,
        error
    ] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        return toast(error.message);
    }

    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    return children;
};

export default RequireAuth;