import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-mortarboard-fill me-2"></i>
              ThinkPlus
            </h5>
            <p className="text-light">
              Empowering the next generation of tech professionals with industry-relevant education and mentorship.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube fs-5"></i></a>
            </div>
          </Col>
          <Col lg={2} md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Courses</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Web Development</a></li>
              <li><a href="#" className="text-light text-decoration-none">Data Science</a></li>
              <li><a href="#" className="text-light text-decoration-none">UI/UX Design</a></li>
              <li><a href="#" className="text-light text-decoration-none">Digital Marketing</a></li>
            </ul>
          </Col>
          <Col lg={2} md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </Col>
          <Col lg={2} md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Terms of use</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cookie policy</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-light">
              © 2024 ThinkPlus. All rights reserved. | Made with ❤️ for better education
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;