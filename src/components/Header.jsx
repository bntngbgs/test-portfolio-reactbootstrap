import React from 'react';
import logo from '../assets/logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="website logo"
              width="64"
              height="64"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end" style={{ fontSize: '1.25rem' }}>
            <Nav.Link href="#home" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="#bio" className="me-3">
              My Bio
            </Nav.Link>
            <Nav.Link href="#stack" className="me-3">
              Tech Stack
            </Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
