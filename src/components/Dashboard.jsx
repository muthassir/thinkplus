import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col>
            <div className="text-center mb-5">
              <h1 className="fw-bold text-gradient">Student Dashboard</h1>
              <p className="text-muted">Welcome back to your learning journey!</p>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <Card className="border-0 shadow-lg course-card">
              <Card.Body className="p-4">
                <h5 className="fw-bold">My Courses</h5>
                <p className="text-muted">Continue your learning journey</p>
                <Button 
                  variant="primary" 
                  onClick={() => navigate('/courses')}
                  className="w-100"
                >
                  View Courses
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <Card className="border-0 shadow-lg course-card">
              <Card.Body className="p-4">
                <h5 className="fw-bold">Progress</h5>
                <p className="text-muted">Track your learning progress</p>
                <div className="progress mb-3">
                  <div 
                    className="progress-bar" 
                    style={{ 
                      width: '65%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                  ></div>
                </div>
                <small className="text-muted">65% Complete</small>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <Card className="border-0 shadow-lg course-card">
              <Card.Body className="p-4">
                <h5 className="fw-bold">Profile</h5>
                <p className="text-muted">Manage your account settings</p>
                <Button variant="outline-primary" className="w-100">
                  Edit Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;