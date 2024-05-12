import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';


function Menu() {
  return (

    <>
      <Container style={{ display: 'flex', marginLeft: '0px', height: '100vh', maxWidth: '100vw' }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '13%', height: '100%', backgroundColor: 'rgb(219, 169, 0)', color: 'white', padding: '10px' }} >
          <div>
            <Navbar.Brand as={Link} to="Home" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '22px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="../public/GearUpLogo.png" alt="Logo" style={{ width: '120px', height: '120px' }} />
              </div>
              GearUP MS</Navbar.Brand>

            <div style={{ paddingTop: '30%', color: 'white', fontSize: '24px', textAlign: 'center' }}>
              <Nav>
                <Button variant="outline-light" as={Link} to="Home" style={{ width: '100%', marginBottom: '10px' }}>Home</Button>
              </Nav>
              <Nav>
                <Button variant="outline-light" as={Link} to="Catalog" style={{ width: '100%', marginBottom: '10px' }}>Catalog</Button>
              </Nav>
              <Nav>
                <Button variant="outline-light" as={Link} to="SuppliersDs" style={{ width: '100%', marginBottom: '10px' }}>Suppliers</Button>
              </Nav>
            </div>

            <div style={{ paddingTop: '30%', color: 'white', fontSize: '24px', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <Nav>
                <Button variant="outline-light" as={Link} to="AccountsDs" style={{ width: '100%', marginBottom: '10px' }}>Accounts</Button>
              </Nav>
              <Nav>
                <Button variant="outline-light" as={Link} to="FinancialDs" style={{ width: '100%', marginBottom: '10px' }}>Financial Dashboard</Button>
              </Nav>
            </div>
          </div>

          <div>
            <Nav>
              <Button variant="outline-light" as={Link} to="ProfileDs" style={{ width: '100%', marginBottom: '10px' }}>Profile</Button>
            </Nav>
            <Nav>
              <Button variant="outline-danger" as={Link} to="SignIn" style={{ width: '100%', marginBottom: '10px' }}>Log Out</Button>
            </Nav>
          </div>
        </div>



        <div style={{ backgroundColor: 'rgb(21,21,21)', flex: 1, height: '100vh', width: '100vw' }}>
          <div style={{ width: '100%', height: '100%', padding: '1%', }}>

            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'navy', maxHeight: '100%', maxWidth: '100%', color: 'white' }}>
              <Outlet />
            </Container>
          </div>
        </div>

      </Container>

    </>
  );
}

export default Menu;