import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/MyNavBar.css'

function MyNavBar() {
  return (
    <Navbar expand="lg" className="salon-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="brand">
          Randu Salon
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* LEFT SIDE LINKS */}
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/service'>Haircut</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/service'>Beard Trim</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/service'>Shaving</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/service'>Kids Haircut</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* RIGHT SIDE AUTH LINKS */}
          <Nav className="auth-links">
            <Nav.Link as={Link} to="/" className="signup-btn">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="login-btn">
              Login
            </Nav.Link><Nav.Link className="logout-btn"
              onClick={() => {
                localStorage.clear();   // remove login data
                window.location.href = "/login"; // redirect
              }}>
              Logout
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavBar
