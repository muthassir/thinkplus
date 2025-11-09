import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
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
    // Simulate login logic
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
                  <Link to="/" className="text-decoration-none">
                    <h2 className="fw-bold text-gradient">ThinkPlus</h2>
                  </Link>
                  <p className="text-muted">Sign in to your account</p>
                </div>

                {showAlert && (
                  <Alert variant="success" className="border-0" style={{ borderRadius: '1rem' }}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Login successful! Redirecting...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
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

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check 
                      type="checkbox" 
                      label="Remember me" 
                      className="text-muted"
                    />
                    <a href="#forgot" className="text-primary text-decoration-none">Forgot password?</a>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-100 py-3 fw-bold border-0"
                    style={{ 
                      borderRadius: '1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                  >
                    Sign In
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-3">Or continue with</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <Button 
                      variant="outline-primary" 
                      className="rounded-circle p-3"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <i className="bi bi-google"></i>
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      className="rounded-circle p-3"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <i className="bi bi-facebook"></i>
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      className="rounded-circle p-3"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <i className="bi bi-github"></i>
                    </Button>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted">
                    Don't have an account?{' '}
                    <Link to="/" className="text-primary text-decoration-none fw-semibold">
                      Sign up
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

export default Login;