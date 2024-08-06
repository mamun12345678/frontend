import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // Custom CSS for Home component

// Import images
import aboutImage from '../assets/images/posterdayPic.jpg';
import resumeImage from '../assets/images/graduationPic.jpg';
import contactImage from '../assets/images/eidPic.jpg';
import blogImage from '../assets/images/background.jpg';

const Home = () => {
  return (
    <div>
      <section className="hero-section text-center">
        <Container className="hero-container">
          <h1 className="hero-title">WELCOME TO MY WEBSITE</h1>
          <p className="hero-subtitle">Md Abdullah Al Mamun</p>
          <Button variant="primary" as={Link} to="/portfolio" className="hero-button">View My Work</Button>
        </Container>
      </section>

      <Container className="mt-5">
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={aboutImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>...
                </Card.Text>
                <Button variant="primary" as={Link} to="/about">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={resumeImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>Resume</Card.Title>
                <Card.Text>...</Card.Text>
                <Button variant="primary" as={Link} to="/resume">View Resume</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={contactImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>...</Card.Text>
                <Button variant="primary" as={Link} to="/contact">Get in Touch</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={blogImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>Read the latest blog posts and articles about IT.</Card.Text>
                <Button variant="primary" as={Link} to="/blog">Read Blog</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
