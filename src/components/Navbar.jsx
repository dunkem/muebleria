import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../imagenes/logoelemento.avif'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './Navbar.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="shadow-sm mb-4">
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'}>
              <img src={logo} alt="logo" className="navbar-logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-between">
            <Nav className="me-auto my-2 my-lg-0 nav-item-large" navbarScroll>
              <Nav.Link as={Link} to={'/'} className="nav-link-custom">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to={'/categoria/Living'} className="nav-link-custom">
                Living
              </Nav.Link>
              <Nav.Link as={Link} to={'/categoria/Dormitorio'} className="nav-link-custom">
                Dormitorio
              </Nav.Link>
              <Nav.Link as={Link} to={'/categoria/Cocina'} className="nav-link-custom">
                Cocina
              </Nav.Link>
              <Nav.Link as={Link} to={'/categoria/Oficina'} className="nav-link-custom">
                Oficina
              </Nav.Link>
              <Nav.Link as={Link} to={'/Contacto'} className="nav-link-custom">
                Contacto
              </Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample
