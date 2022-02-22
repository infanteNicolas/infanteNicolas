import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import white from '../images/white.jpeg'
import CartWidget from './CartWidget'

export default class extends Component {
  render() {
    return (
      <div> 
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"> <img width="70px" height="auto" className="img-responsive" src={white}  alt="logo" /> Rapture 3D Impresiones</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Galería">Galería</Nav.Link>
      <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
      <NavDropdown title="Locales" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#aRamosMejia">Ramos Mejía</NavDropdown.Item>
        <NavDropdown.Item href="#Mordor2">Mordor</NavDropdown.Item>
        <NavDropdown.Item href="#CarlosPazxdxd">Carlos Paz</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#EnviosADomicilio">Envíos a domicilio</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#Contactanos">Contactanos!</Nav.Link>
      <Nav.Link href="#carritocompra"><i class="bi bi-cart-check-fill"> <CartWidget/> </i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}
