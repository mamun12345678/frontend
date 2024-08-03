import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import './ContactForm.css'; // Import custom CSS

const ContactForm = () => {
  const [state, handleSubmit] = useForm("movaepov");

  return (
    <Container className="contact-form-container mt-5">
      <h2 className="contact-form-title">Contact Me</h2>
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
    </Container>
  );
};

export default ContactForm;
