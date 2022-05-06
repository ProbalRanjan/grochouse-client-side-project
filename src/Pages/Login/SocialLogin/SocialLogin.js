import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const SocialLogin = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/manageitems")
        }
    });

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        return toast(error.massage);
    }

    return (
        <div>
            <div className="d-grid gap-2 my-4 social-login">
                <button onClick={() => signInWithGoogle()}>
                    <img src="images/google.png" alt="" />
                    Sign in with Google
                </button>
            </div>
            <p className='error-message'>{error}</p>
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
        </div>
    );
};

export default SocialLogin;