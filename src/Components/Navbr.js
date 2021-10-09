import React, {Component} from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Navbr.css';

class Navbr extends Component {
    render(){
        return (
            <div>
        <Navbar className="header-style" bg="light" expand="lg">
          <Container>
            <Navbar.Brand className="Logo" href="#home">Pure-Reactjs-Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Nav-Opt">
            <Nav.Link className="Home" href="#home">Home</Nav.Link>
            <Nav.Link className="About" href="#about">About</Nav.Link>
            <Nav.Link className="Contact" href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </div>
        )
    }
}
export default Navbr;