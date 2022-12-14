import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from './image/logo.png';


export const BarreNavigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/"> <img src={Image} alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top"

        />{' '}
          Repertoire Musicale</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/ajout">Ajout</Nav.Link>
          <Nav.Link href="/modifier">Modifier</Nav.Link>
          <Nav.Link href="/repertoire">Repertoire</Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
