import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-3 bg-dark text-light">
      <Container className="text-center">
        <p>&copy; 2023 Restaurant. All rights reserved.</p>
        <p>Contact: Syam@email.com</p>
      </Container>
    </footer>
  );
}

export default Footer;
