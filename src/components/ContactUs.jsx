import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Card.Text>
            Please fill out the form below to get in touch with us.
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" placeholder="Enter your message" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactUs;
