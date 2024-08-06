// src/components/Portfolio.js

import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import styles from './Portfolio.css'; // Import CSS module

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
    <Container className={styles.container}>
      <h2 className={styles.textCenter}>Portfolio</h2>
      {projects.length === 0 ? (
        <Alert variant="info" className="text-center">
          No projects available at the moment. Please check back later.
        </Alert>
      ) : (
        <Row>
          {projects.map(project => (
            <Col md={6} lg={4} className="mb-4" key={project.id}>
              <Card className={styles.projectCard}>
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
                  <Card.Text className={styles.cardText}>{project.description}</Card.Text>
                  <div className={styles.details}>
                    <strong>To see the website working:</strong>
                    <ul className={styles.list}>
                      <li>
                        First, run the backend server: 
                        <a href="https://the-metro-backend.onrender.com/" target="_blank" rel="noopener noreferrer" className={styles.link}> Backend Server</a>
                      </li>
                      <li>
                        Then, run the frontend: 
                        <a href="https://the-metro.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.link}> Frontend</a>
                      </li>
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
