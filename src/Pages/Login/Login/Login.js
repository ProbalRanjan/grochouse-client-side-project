import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || '/manageitems';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    // Login with email and password
    const handleSignIn = event => {
        event.preventDefault();

        if (error) {
            return toast("Please enter right email or password")
        }

        signInWithEmailAndPassword(email, password);
    }

    // Reset Password
    const handleForgetPass = async () => {
        const inputMail = email;
        if (inputMail) {
            await sendPasswordResetEmail(email);
            toast("Please check your email");
        }
        else {
            toast("Please enter your email first");
        }
    }

    // Login user navigate
    useEffect(() => {
        if (user) {
            navigate(form, { replace: true })
        }
    })

    // Loading Spinner
    if (loading || sending) {
        return <Loading></Loading>
    }

    return (
        <div className='container section-container login-section'>
            <div>
                <img className='login-img' src="images/login-contact/login.png" alt="" />
            </div>
            <div className='login-form'>
                <h3>Login to your Account</h3>

                {/* Social Login */}
                <SocialLogin></SocialLogin>

                <p className='alternative'>OR</p>

                {/* Login Form */}
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className='input-field' onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input-field' onBlur={handlePasswordBlur} name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <button onClick={handleForgetPass} className="forget-pass">
                        <p>Forget Password?</p>
                    </button>

                    <button className='submit-button'> Login</button>
                </Form>

                <p className='set-account'>Don't have an account?<Link to='/register'>Sign Up</Link></p>
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
        </div>
    );
};

export default Login;