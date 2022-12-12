import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from './image/logo.png';

export const BarreNavigation = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
            <Navbar.Brand href="/"> <img src={Image} alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top"

        />{' '}
          Repertoire Musicale</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/repertoire">Répertoire</Nav.Link>
                        <Nav.Link href="/creerDemande">Créer demande speciale</Nav.Link>
                        <Nav.Link href="/afficherDemande">Afficher demandes speciales</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    )
}