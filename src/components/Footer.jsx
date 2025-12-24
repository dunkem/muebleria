import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear();
  
  const footerStyle = {
    backgroundColor: '#1a1a1a', // Elite Black
    color: '#999',
    padding: '60px 0 20px 0',
    marginTop: '50px',
    fontSize: '0.9rem'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.3s'
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h4 style={{color: 'white', marginBottom: '20px'}}>ELEMENTO MADERA</h4>
            <p>Diseño, calidad y confort para tu hogar. Muebles pensados para durar toda la vida.</p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 style={{color: '#c5a059', textTransform: 'uppercase', marginBottom: '20px'}}>Navegación</h5>
            <Link to="/" style={linkStyle}>Inicio</Link>
            <Link to="/categoria/Living" style={linkStyle}>Living</Link>
            <Link to="/categoria/Oficina" style={linkStyle}>Oficina</Link>
            <Link to="/Contacto" style={linkStyle}>Contacto</Link>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 style={{color: '#c5a059', textTransform: 'uppercase', marginBottom: '20px'}}>Contacto</h5>
            <p>Av. Libertador 1234, Buenos Aires</p>
            <p>info@elementomadera.com</p>
            <p>+54 9 11 1234 5678</p>
          </Col>
        </Row>
        
        <hr style={{borderColor: '#333'}} />
        
        <Row className="text-center mt-4">
          <Col>
            <p>© {year} Elemento Madera. Todos los derechos reservados.</p>
            <p style={{fontSize: '0.8rem', marginTop: '10px'}}>
              Diseño y Desarrollo por{' '}
              <a 
                href="https://dtecno.com.ar" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{color: '#c5a059', fontWeight: 'bold'}}
              >
                DTECNO
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}