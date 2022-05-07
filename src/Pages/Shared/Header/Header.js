import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' sticky='top'>
                <Container>
                    <Link className='nav-logo' to='/'>
                        <img src="images/logo/site-logo1.png" alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <div className="nav-links">
                                <Link to='/'>Home</Link>
                                <Link to='/about'>About</Link>
                                <Link to='/manageitems'>Manage</Link>
                                <Link to='/additems'>Add Items</Link>
                                <Link to='/myitems'>My Items</Link>
                                <Link to='/blog'>Blog</Link>
                                <Link to='/contact'>Contact</Link>

                                {
                                    user ?
                                        <Link to='/'>
                                            <button onClick={handleSignOut} className='global-button'>Sign Out</button>
                                        </Link>
                                        :
                                        <Link to='/login'>
                                            <button className='global-button'>Login</button>
                                        </Link>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;