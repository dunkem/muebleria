import React from 'react'
import Container from 'react-bootstrap/Container'
import './Contacto.css' // Asegúrate de crear este archivo CSS

const Contacto = () => {
  return (
    <Container className="contact-container">
      <h2>Contacto</h2>
      <form name="contact" method="POST" data-netlify="true" className="contact-form">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contacto
