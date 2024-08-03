// src/components/NavBar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css'; // Import custom CSS for NavBar

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="nav-link">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={NavLink} to="/resume" className="nav-link">Resume</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
