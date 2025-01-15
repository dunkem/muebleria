import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import swal from 'sweetalert'

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCartContext()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')

  function validateEmail(email) {
    const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    if (!reg.test(email)) {
      swal({
        title: 'El formato de email no es válido',
        text: 'ejemplo: nombre@mail.com',
        icon: 'warning',
        button: 'cerrar',
        timer: 3000,
      })
      return false
    }
    return true
  }

  function validateTelefono(telefono) {
    const reg = /^[+]?[0-9]{3}?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    if (!reg.test(telefono)) {
      swal({
        title: 'El formato del teléfono no es válido',
        text: 'código de área sin el 0 y su número, ej: 1155555555',
        icon: 'warning',
        button: 'cerrar',
      })
      return false
    }
    return true
  }

  const order = {
    buyer: {
      nombre: nombre,
      email: email,
      telefono: telefono,
      direccion: direccion,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    if (totalPrice() === 0) {
      swal({
        title: 'No hay nada en tu carrito',
        icon: 'info',
        text: 'Vuelve al inicio para seguir viendo nuestros productos',
      })
      return
    }
    if (!nombre || !email || !telefono || !direccion) {
      swal({
        title: 'Completa los campos requeridos',
        text: 'Debes completar todos los campos',
        icon: 'warning',
        button: 'cerrar',
        timer: 3000,
      })
      return
    }

    if (!validateEmail(email)) {
      return
    }

    if (!validateTelefono(telefono)) {
      return
    }

    addDoc(ordersCollection, order).then(({ id }) => {
      swal({
        icon: 'success',
        title: 'Pedido recibido con éxito',
        text: 'Nos vamos a comunicar a tu email, tu código de pedido es: ' + id,
      })
      clearCart()
    })
  }

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '20px',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
      }}
    >
      <h2>Total a pagar: $ {totalPrice()}</h2>
      <div>
        <input
          placeholder="*Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="*Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="*Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          placeholder="*Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <p style={{ color: 'red' }}>(*campos obligatorios)</p>
      </div>
      <div style={{ margin: 10 }}>
        <Button onClick={handleClick}> Generar pedido </Button>
      </div>
    </div>
  )
}
