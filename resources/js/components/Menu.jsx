import Container from 'react-bootstrap/Container';
import React from 'react';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Menu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="">BiblioTec</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">Home</Nav.Link>
            <Nav.Link as={Link} to="X">Books</Nav.Link>
            <Nav.Link as={Link} to="X">Lends</Nav.Link>

          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="profile">Profile</Button>
          </Nav>
          <Nav>
            <Button variant="outline-light" >
              Log Out
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Container>
          <Outlet>
          </Outlet>
        </Container>
      </section>
    </>
  );
}

export default Menu;