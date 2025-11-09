import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer at Google",
      content: "ThinkPlus transformed my career. The full-stack course gave me the skills and confidence to crack my dream job at Google!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Data Scientist at Amazon",
      content: "The Data Science program is exceptional. The projects are industry-relevant and the mentorship is outstanding.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "UI/UX Designer at Microsoft",
      content: "From zero to hero! The design course helped me build a strong portfolio that got me multiple job offers.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Success Stories</h2>
            <p className="lead text-muted">
              Hear from our alumni who transformed their careers with ThinkPlus
            </p>
          </Col>
        </Row>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-warning mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="card-text fst-italic text-muted mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                    <p className="text-muted small mb-0">{testimonial.role}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;