import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../imagenes/logoelemento.avif' // Asegúrate que esta ruta exista
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom' // Usamos NavLink para clase 'active' automática
import './Navbar.css'

function ColorSchemesExample() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar 
        expanded={expanded}
        bg="white" 
        expand="lg" 
        className="elite-navbar shadow-sm" 
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
             {/* Si no carga el logo, muestra texto como fallback */}
             {logo ? <img src={logo} alt="Elemento Madera" className="navbar-logo" /> : "ELEMENTO MADERA"}
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="navbarScroll" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ gap: '20px' }}>
              
              <Nav.Link as={NavLink} to="/" className="nav-link-custom" onClick={() => setExpanded(false)}>
                Inicio
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/categoria/Living" className="nav-link-custom" onClick={() => setExpanded(false)}>
                Living
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/categoria/Dormitorio" className="nav-link-custom" onClick={() => setExpanded(false)}>
                Dormitorio
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/categoria/Cocina" className="nav-link-custom" onClick={() => setExpanded(false)}>
                Cocina
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/categoria/Oficina" className="nav-link-custom" onClick={() => setExpanded(false)}>
                Oficina
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/Contacto" className="nav-link-custom" onClick={() => setExpanded(false)}>
                Contacto
              </Nav.Link>

            </Nav>
            
            {/* Widget del carrito a la derecha */}
            <div onClick={() => setExpanded(false)}>
                <CartWidget />
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample