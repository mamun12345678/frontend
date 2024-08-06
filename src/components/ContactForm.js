import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Alert, Container, Card, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("movaepov");

  return (
    <Container className="contact-form-container mt-5">
      <h2 className="contact-form-title">Contact Me</h2>
      <Row>
        <Col md={6} className="contact-info">
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
              <p><strong>Name:</strong> Md Abdullah Al Mamun</p>
              <p><strong>Profession:</strong> Desktop and Media Service Technician</p>
                <p><strong>Department:</strong> ICT</p>
                <p><strong>Company:</strong> University of Bedfordshire</p>
                <p><FaPhone /> <strong>Phone:</strong> +447394032549</p>
                <p><FaEnvelope /> <strong>Email:</strong> mdabdullah.almamun.one@gmail.com</p>
                <p><FaMapMarkerAlt /> <strong>Location:</strong> 5 Westbourne Road, Luton, Bedfordshire, LU4 8JD</p>
                
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 contact-form-button" disabled={state.submitting}>
              Send Message
            </Button>
          </Form>
          
          {state.succeeded && (
            <Alert variant="success" className="mt-3">
              Thanks for your message!
            </Alert>
          )}
          {state.errors && state.errors.length > 0 && (
            <Alert variant="danger" className="mt-3">
              There was an error sending your message. Please try again.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
