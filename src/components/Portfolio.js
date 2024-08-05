import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import './Portfolio.css'; // Ensure this path is correct

// Import the image
import theMetroImage from '../assets/images/theMetro.jpg';

const projects = [
  {
    id: 1,
    title: 'The Metro Website',
    description: 'A website for The Metro Cafe, showcasing daily specials and events. Built with modern web technologies.',
    image: theMetroImage,
    link: 'https://the-metro.netlify.app/'
  }
  // Add more projects here
];

const Portfolio = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      {projects.length === 0 ? (
        <Alert variant="info" className="text-center">
          No projects available at the moment. Please check back later.
        </Alert>
      ) : (
        <Row>
          {projects.map(project => (
            <Col md={6} lg={4} className="mb-4" key={project.id}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div>
                    <strong>To see the website working:</strong>
                    <ul>
                      <li>First, run the backend server: <a href="https://the-metro-backend.onrender.com/" target="_blank" rel="noopener noreferrer">Backend Server</a></li>
                      <li>Then, run the frontend: <a href="https://the-metro.netlify.app/" target="_blank" rel="noopener noreferrer">Frontend</a></li>
                    </ul>
                  </div>
                  <Button variant="primary" href={project.link} target="_blank">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Portfolio;
