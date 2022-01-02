import React from "react";
import { Navbar, Container, Nav,Form,FormControl,Button,NavDropdown } from "react-bootstrap";
import logo from '../Images/classicLogo.jpeg'
import './navbar.css'
import {AiFillCar} from 'react-icons/ai/index'
import {GiCartwheel} from 'react-icons/gi/index'
const NavBar = () => {
  return (
   <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="home">
      <img className="navbar" src={logo} alt="" width={120} height={80} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="features"><span className="company-one">Features</span></Nav.Link>
      <Nav.Link href="contacts"><span className="company-one">Contacts</span></Nav.Link>
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <span><Nav.Link href="classicauto"><span className="company-one"><AiFillCar size={35} /></span></Nav.Link></span>
      <Nav.Link eventKey={2} href="jeytyers">
        <span className="company-two"><GiCartwheel size={35} /></span>

      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
   
   
   </>
  );
};

export default NavBar;
