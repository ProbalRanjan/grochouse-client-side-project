import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' sticky='top'>
                <Container>
                    <Link className='nav-logo' to='/'>
                        <img src="images/site-logo1.png" alt="" />
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
                                <Link to='/login'>
                                    <button className='login-btn'>Login</button>
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;