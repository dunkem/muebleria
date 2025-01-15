import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Muebles a Medida de Alta Calidad</h1>
        <p>Ofrecemos los mejores precios y calidad en muebles a medida. Utilizamos los tipos de madera más actuales: roble, nogal, cedro y más.</p>
        <Link to="/categoria/Living" className="btn btn-primary">
          Comprar Ahora
        </Link>
      </div>
    </div>
  )
}
