import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  const features = [
    {
      icon: 'bi bi-laptop',
      title: 'Industry-Ready Curriculum',
      description: 'Learn the most in-demand skills with courses designed by industry experts.'
    },
    {
      icon: 'bi bi-people',
      title: 'Live Mentorship',
      description: 'Get personalized guidance from experienced mentors with 1:1 sessions.'
    },
    {
      icon: 'bi bi-award',
      title: 'Certification',
      description: 'Earn recognized certificates that boost your resume and career prospects.'
    },
    {
      icon: 'bi bi-briefcase',
      title: 'Career Support',
      description: 'Get placement assistance with our dedicated career services.'
    }
  ];

  return (
    <section className="py-5 bg-light" id="features">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Why Choose ThinkPlus?</h2>
            <p className="lead text-muted">
              We provide everything you need to launch a successful career in tech
            </p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="text-primary mb-3">
                    <i className={`${feature.icon} fs-1`}></i>
                  </div>
                  <h5 className="card-title fw-bold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;