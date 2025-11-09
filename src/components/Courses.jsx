import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Courses = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      description: "Master MERN stack with modern tools and best practices",
      duration: "6 Months",
      students: "2.5K+",
      rating: 4.9,
      price: "₹25,999",
      originalPrice: "₹35,999",
      category: "Development"
    },
    {
      title: "Data Science & Machine Learning",
      description: "Python, SQL, ML algorithms and real-world projects",
      duration: "8 Months",
      students: "1.8K+",
      rating: 4.8,
      price: "₹32,999",
      originalPrice: "₹45,999",
      category: "Data Science"
    },
    {
      title: "UI/UX Design Mastery",
      description: "Figma, prototyping, and design thinking process",
      duration: "4 Months",
      students: "1.2K+",
      rating: 4.7,
      price: "₹18,999",
      originalPrice: "₹24,999",
      category: "Design"
    }
  ];

  return (
    <section id="courses" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Popular Courses</h2>
            <p className="lead text-muted">
              Handcrafted courses designed to get you job-ready
            </p>
          </Col>
        </Row>
        <Row>
          {courses.map((course, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm course-card border-0">
                <Card.Body className="p-4">
                  <Badge bg="primary" className="mb-3">{course.category}</Badge>
                  <h5 className="card-title fw-bold">{course.title}</h5>
                  <p className="card-text text-muted mb-3">{course.description}</p>
                  
                  <div className="d-flex justify-content-between text-muted small mb-3">
                    <span><i className="bi bi-clock me-1"></i> {course.duration}</span>
                    <span><i className="bi bi-people me-1"></i> {course.students}</span>
                    <span><i className="bi bi-star-fill text-warning me-1"></i> {course.rating}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className="h4 fw-bold text-primary mb-0">{course.price}</span>
                      <span className="text-muted text-decoration-line-through ms-2">{course.originalPrice}</span>
                    </div>
                    <Badge bg="success" className="fs-6">Limited Offer</Badge>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">Enroll Now</Button>
                    <Button variant="outline-secondary" size="sm">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <Button variant="outline-primary" size="lg">View All Courses</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;