import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    // User Sign Up
    const handleSignUp = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return toast("Password didn't match!!")
        }

        if (password.length < 6) {
            return toast('Your password must be at least 8 characters');
        }

        createUserWithEmailAndPassword(email, password);
    }

    // Sign Up user navigate
    useEffect(() => {
        if (user) {
            navigate('/manageinventory');
        }
    })

    // Loading Spinner
    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className='container section-container login-section'>
            <div>
                <img className='login-img' src="images/login-contact/signup.png" alt="" />
            </div>
            <div className='login-form'>
                <h3>Create your Account</h3>

                {/* Social Login */}
                <SocialLogin></SocialLogin>

                <p className='alternative'>OR</p>

                {/* Signup Form */}
                <Form onSubmit={handleSignUp}>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className='input-field' onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input-field' onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className='input-field' onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <button className='submit-button'>Sign Up</button>
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
                </Form>

                <p className='set-account'>Have an account?<Link to='/login'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;