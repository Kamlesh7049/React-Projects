import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="home-container text-center p-5 bg-light">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={8}>
          <h1 className="display-4 fw-bold text-primary">Welcome to Our Website!</h1>
          <p className="lead text-muted">
            We're glad to have you here. Explore our features and services to get started.
          </p>
          <Button variant="primary" className="mt-4" size="lg">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
