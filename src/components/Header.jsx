import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <i className="bi bi-mortarboard-fill me-2"></i>
          ThinkPlus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link  href="#features" className="fw-semibold">Features</Nav.Link>
            <Nav.Link  href="#courses" className="fw-semibold">Courses</Nav.Link>
            <Nav.Link href="#testimonials" className="fw-semibold">Success Stories</Nav.Link>
            <Nav.Link href="#contact" className="fw-semibold">Contact</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button 
              variant="outline-primary" 
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button 
              variant="primary"
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;