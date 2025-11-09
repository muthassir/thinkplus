import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Stats = () => {
  const stats = [
    { icon: 'bi bi-mortarboard', number: "10,000+", label: "Students Trained" },
    { icon: 'bi bi-person-check', number: "500+", label: "Expert Mentors" },
    { icon: 'bi bi-building', number: "200+", label: "Hiring Partners" },
    { icon: 'bi bi-trophy', number: "₹6.5L", label: "Average Salary" }
  ];

  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="text-center mb-4" key={index}>
              <i className={`${stat.icon} display-4 mb-3`}></i>
              <h3 className="fw-bold display-6">{stat.number}</h3>
              <p className="lead">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;