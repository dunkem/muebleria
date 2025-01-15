import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import ColorSchemesExample from './components/Navbar'
import CartProvider from './context/CartContext'
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ColorSchemesExample />
        <Hero />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
        <div className="whatsapp-button">
          <a href="https://wa.me/5491167600395" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/ee994-logo-whatsapp-png.png?fit=1000%2C1000&ssl=1"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
          </a>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
