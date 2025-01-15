import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export default function ItemListContainer() {
  const { idcategoria } = useParams()
  const [catalogo, setCatalogo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    let productosQuery

    if (idcategoria) {
      productosQuery = query(
        collection(db, 'productos'),
        where('categoria', '==', idcategoria)
      )
    } else {
      productosQuery = collection(db, 'productos')
    }

    getDocs(productosQuery)
      .then((res) => {
        const arrayNorm = res.docs.map((element) => ({
          id: element.id,
          title: element.data().title,
          description: element.data().description,
          price: element.data().price,
          pictureUrl: element.data().pictureUrl,
          categoria: element.data().categoria,
          stock: element.data().stock,
        }))

        setCatalogo(arrayNorm)
      })
      .catch((error) => {
        console.error('Error fetching products: ', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idcategoria])

  return (
    <div className="itemlistcont">
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <ItemList catalogo={catalogo} />
      )}
    </div>
  )
}
