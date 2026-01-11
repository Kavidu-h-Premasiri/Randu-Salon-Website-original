import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Randu Salon</h5>
            <p>Quality grooming & styling for everyone.</p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/home" className="footer-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/service" className="footer-link">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/appointment" className="footer-link">
                Appointment
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="footer-link">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@randusalon.com</p>
            <p>Phone: +94 786832009</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Randu Salon. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default  Footer