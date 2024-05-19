import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider'; // Importa el contexto de autenticación

function Menu() {
  const { logout } = useContext(AuthContext); // Obtiene la función de logout del contexto de autenticación

  const handleLogout = () => {
    logout(); // Llama a la función de logout al hacer clic en el botón
    console.log("User logged out"); // Agrega un console.log para verificar el logout
  };

  return (
    <Container fluid style={{ display: 'flex', height: '100vh' }}>
      <Col xs={3} style={{ backgroundColor: 'rgb(219, 169, 0)', color: 'white', padding: '1em' }}>
        <Row className="justify-content-center align-items-center" style={{textAlign: 'center', paddingRight: '60px'}}>
          <Navbar.Brand as={Link} to="Home">
            <img src="../public/GearUpLogo.png" alt="Logo" style={{ width: '15em', height: '15em' }} />
            GearUP MS
          </Navbar.Brand>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ paddingTop: '30%', fontSize: '24px' }}>
          <Nav className="d-flex justify-content-center">
            <Button variant="outline-light" as={Link} to="Catalog" style={{ width: '90%', marginBottom: '10px' }}>Catalog</Button>
            <Button variant="outline-light" as={Link} to="Suppliers" style={{ width: '90%', marginBottom: '10px' }}>Suppliers</Button>
          </Nav>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ paddingTop: '30%', fontSize: '24px' }}>
          <Nav className="d-flex justify-content-center">
            <Button variant="outline-light" as={Link} to="Accounts" style={{ width: '90%', marginBottom: '10px' }}>Accounts</Button>
            <Button variant="outline-light" as={Link} to="Transactions" style={{ width: '90%', marginBottom: '10px' }}>Financial Dashboard</Button>
          </Nav>
        </Row>
        <Row className="justify-content-center align-items-center" style={{ paddingTop: '30%', fontSize: '24px' }}>
          <Nav className="d-flex justify-content-center">
            <Button variant="outline-light" as={Link} to="ProfileDs" style={{ width: '90%', marginBottom: '10px' }}>Profile</Button>
            <Button variant="outline-danger" onClick={handleLogout} style={{ width: '90%', marginBottom: '10px' }}>Log Out</Button>
          </Nav>
        </Row>
      </Col>

      <Col xs={9} style={{ backgroundColor: 'rgb(21,21,21)' }}>
        <Container style={{ paddingTop: '20px', paddingBottom: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: '#666', color: 'white', height: '100vh', overflow: 'auto' }}>
          <Outlet />
        </Container>
      </Col>

    </Container>
  );
}

export default Menu;