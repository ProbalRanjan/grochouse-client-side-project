import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const [error, setError] = useState('');
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
        setError(error.massage);
        return;
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
        </div>
    );
};

export default SocialLogin;