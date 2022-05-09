import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import './RequireAuth.css'

const RequireAuth = ({ children }) => {

    const [
        user,
        loading
    ] = useAuthState(auth);
    const location = useLocation();

    const [
        sendEmailVerification,
        sending
    ] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='container my-5 email-verify'>
            <img src="https://i.ibb.co/YcQWchk/email-verify.png" alt="" />
            <h4>Please Verify your email to access the site!!</h4>
            <button className='global-button'
                onClick={
                    async () => {
                        await sendEmailVerification();
                        toast('Email Sent! Please check your mail!');
                    }}>Verify Email</button>

            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;