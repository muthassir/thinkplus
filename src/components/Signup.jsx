import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import {FaGithub, FaFacebook, FaGoogle} from "react-icons/fa"

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    setShowAlert(true);
    
    // Redirect to dashboard after successful login
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={5} md={7}>
            <Card className="border-0 shadow-lg" style={{ borderRadius: '1.5rem', backdropFilter: 'blur(10px)' }}>
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <Link to="/">
                    <h2>Thinkplus</h2>
                  </Link>
                  <p className="text-muted">Sign up to your account</p>
                </div>

                {showAlert && (
                  <Alert variant="success" className="border-0" style={{ borderRadius: '1rem' }}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Login successful! Redirecting...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                   <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter your name"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="border-0 py-3"
                      style={{ borderRadius: '1rem', backgroundColor: '#f8f9fa' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-0 py-3"
                      style={{ borderRadius: '1rem', backgroundColor: '#f8f9fa' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="border-0 py-3"
                      style={{ borderRadius: '1rem', backgroundColor: '#f8f9fa' }}
                    />
                  </Form.Group>


                  <Button 
                    type="submit" 
                    className="w-100 py-3 fw-bold border-0"
                    style={{ 
                      borderRadius: '1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                  >
                    Sign Up
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-3">Or continue with</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <Button 
                      variant="outline-primary" 
                      className="rounded-circle p-3 d-flex justify-content-center align-items-center"
                      style={{ width: '50px', height: '50px' }}
                    >
                     <FaGoogle size={35} />
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      className="rounded-circle p-3 d-flex justify-content-center align-items-center"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <FaFacebook size={35} />
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      style={{ width: '50px', height: '50px' }}
                          className="rounded-circle p-3 d-flex justify-content-center align-items-center"
                    >
                      <FaGithub  size={35}/>
                    </Button>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary text-decoration-none fw-semibold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;