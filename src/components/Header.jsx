import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    onSearch(searchQuery);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name="search"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
