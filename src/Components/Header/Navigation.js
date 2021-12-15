import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'
import logo from '../../Images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Navigation = () => {
    const {user,logOut}=useFirebase()
    return (
        <div>
           <Navbar collapseOnSelect expand="lg"  variant="light" className="mb-3">
  <Container>
  <img src={logo} className="logo" alt="" />
  <Navbar.Brand href="#home">
      <h3><strong>BeardBros Lab</strong></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      
    <Nav className="mx-auto navs">
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/about">About</Link>
      
    </Nav>
    <Nav className="navs2">
      
        {user.email ? <button onClick={logOut} className="custom-button1">Logout</button>
        :
        <Link to="/login"> <button className="custom-button1">Login / Register</button></Link>
         }
        
    
    </Nav>
     </Navbar.Collapse>
     </Container>
    </Navbar>

        </div>
    );
};

export default Navigation;