import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaStar } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-gradient text-white py-5">
      <Container>
        <Row className="align-items-center min-vh-50 py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <span className="badge bg-light text-primary mb-3 fs-6">🚀 Future Ready Learning</span>
            <h1 className="display-4 fw-bold mb-4">
              Learn from the <span className="text-warning">Best</span> to Become the <span className="text-warning">Best</span>
            </h1>
            <p className="lead mb-4">
              Transform your career with industry-leading courses, expert mentors, 
              and a community of passionate learners. Your success story starts here.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <Button 
                variant="warning" 
                size="lg" 
                className="fw-semibold"
                onClick={() => navigate('/courses')}
              >
                Explore Courses
                <FaPlay className="ms-2" />
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                onClick={() => navigate('/login')}
              >
                Book Free Demo
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <div className="text-lg">
                <span className="font-bold">10K+</span> Successful Students
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Card className="bg-base-100/20 backdrop-blur-sm text-white shadow-2xl border-0">
              <Card.Body className="p-4">
                <h3 className="card-title text-2xl text-primary mb-4">Start Your Journey Today!</h3>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      placeholder="Full Name" 
                      className="border-2 py-3"
                      style={{ borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="email" 
                      placeholder="Email Address" 
                      className="border-2 py-3"
                      style={{ borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Select 
                      className="border-2 py-3 dropdown "
                      style={{ borderRadius: '0.75rem', }}
                    >
                      <option>Choose your course interest</option>
                      <option>Web Development</option>
                      <option>Data Science</option>
                      <option>Digital Marketing</option>
                      <option>UI/UX Design</option>
                    </Form.Select>
                  </Form.Group>
                  <Button 
                    type="submit" 
                    className="btn btn-warning w-100 py-3 fw-semibold border-0"
                    style={{ borderRadius: '0.75rem' }}
                    onClick={() => navigate('/login')}
                  >
                    Get Free Career Guidance
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;