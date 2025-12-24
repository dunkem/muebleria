import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Spinner from 'react-bootstrap/Spinner'
import { Container } from 'react-bootstrap'

// --- DATOS DE PRUEBA (MOCK) PARA QUE VEAS TU WEB "ELITE" YA MISMO ---
// Cuando tengas Firebase cargado, puedes borrar esto y usar el código de abajo.
const productosMock = [
  { id: '1', title: 'Sillón Chester Cuero', price: 450000, category: 'Living', pictureUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', description: 'Cuero genuino, estilo inglés.' },
  { id: '2', title: 'Mesa Roble Macizo', price: 320000, category: 'Living', pictureUrl: 'https://images.unsplash.com/photo-1577140917170-285929db8847?w=600&q=80', description: 'Madera estacionada 5 años.' },
  { id: '3', title: 'Cama King Size', price: 580000, category: 'Dormitorio', pictureUrl: 'https://images.unsplash.com/photo-1505693416388-b0346ef41495?w=600&q=80', description: 'Respaldo capitoné de lino.' },
  { id: '4', title: 'Escritorio Minimalista', price: 180000, category: 'Oficina', pictureUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80', description: 'Diseño industrial hierro y madera.' },
  { id: '5', title: 'Isla de Cocina Marmol', price: 750000, category: 'Cocina', pictureUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80', description: 'Carrara importado.' },
  { id: '6', title: 'Silla Eames Premium', price: 45000, category: 'Oficina', pictureUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80', description: 'Replica exacta alta calidad.' },
]

export default function ItemListContainer() {
  const { idcategoria } = useParams()
  const [catalogo, setCatalogo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    
    // SIMULACIÓN DE CARGA (Para efecto profesional)
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosMock)
      }, 1000)
    })

    promesa.then((res) => {
      if (idcategoria) {
        // Filtramos por categoría (ignorando mayúsculas/minúsculas para evitar errores)
        setCatalogo(res.filter(prod => prod.category.toLowerCase() === idcategoria.toLowerCase()))
      } else {
        setCatalogo(res)
      }
    }).finally(() => {
      setLoading(false)
    })

    // --- CÓDIGO FIREBASE (Descomentar cuando cargues productos en tu DB) ---
    /*
    const db = getFirestore()
    const queryBase = collection(db, 'productos')
    const queryFinal = idcategoria ? query(queryBase, where('categoria', '==', idcategoria)) : queryBase;
    
    getDocs(queryFinal).then((res) => {
        setCatalogo(res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    }).finally(() => setLoading(false))
    */

  }, [idcategoria])

  // Estilos para centrar el contenido y darle aire arriba
  const containerStyle = {
    paddingTop: '50px', 
    paddingBottom: '50px',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <Container style={containerStyle}>
      {loading ? (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
           <Spinner animation="border" role="status" variant="secondary" />
           <p style={{marginTop: '10px', color: '#666', fontFamily: 'Lato'}}>Buscando muebles exclusivos...</p>
        </div>
      ) : (
        <>
            {/* Título de la sección dinámico */}
            <h2 style={{ 
                fontFamily: 'Playfair Display', 
                textAlign: 'center', 
                marginBottom: '40px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '2rem'
            }}>
                {idcategoria ? `Colección ${idcategoria}` : 'Catálogo Completo'}
            </h2>
            
            {/* Grid de productos */}
            <div style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '30px'
            }}>
                <ItemList catalogo={catalogo} />
            </div>

            {catalogo.length === 0 && (
                <p>No se encontraron productos en esta categoría.</p>
            )}
        </>
      )}
    </Container>
  )
}