import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Item({ id, title, price, pictureUrl, categoria }) {
  return (
    <Card className="elite-card" style={{ width: '18rem', margin: '15px' }}>
      <div style={{overflow: 'hidden'}}> {/* Contenedor para efecto zoom si quieres agregarlo despues */}
        <Card.Img variant="top" src={pictureUrl} />
      </div>
      <Card.Body>
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text>
          <h4>${price}</h4>
          <small className="text-muted text-uppercase">{categoria}</small>
        </Card.Text>
        <Link className="link" to={'/item/' + id}>
          <Button variant="primary">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}