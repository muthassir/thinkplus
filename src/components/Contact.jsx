import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
            <p className="lead text-muted">
              Have questions? We'd love to hear from you
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow-sm border-0">
              <Card.Body className="p-5">
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Tell us about your requirements..." 
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" size="lg" className="fw-semibold">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Contact Info */}
        <Row className="mt-5">
          <Col md={4} className="text-center mb-4">
            <div className="p-4">
              <i className="bi bi-geo-alt-fill text-primary fs-1 mb-3"></i>
              <h5>Our Office</h5>
              <p className="text-muted mb-0">
                123 Education Street<br />
                Learning City, LC 12345
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="p-4">
              <i className="bi bi-telephone-fill text-primary fs-1 mb-3"></i>
              <h5>Phone Number</h5>
              <p className="text-muted mb-0">
                +1 (555) 123-4567<br />
                Mon-Fri 9am-6pm
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="p-4">
              <i className="bi bi-envelope-fill text-primary fs-1 mb-3"></i>
              <h5>Email Address</h5>
              <p className="text-muted mb-0">
                hello@thinkplus.com<br />
                support@thinkplus.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;