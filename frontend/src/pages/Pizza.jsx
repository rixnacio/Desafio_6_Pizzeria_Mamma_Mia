import { useEffect, useState } from 'react'

const imagenes = {
  napolitana: "/img/napolitana.jpg",
  española: "/img/española.jpg",
  salame: "/img/salame.jpg",
  "cuatro estaciones": "/img/cuatro estaciones.jpg",
  bacon: "/img/bacon.jpg",
  "pollo picante": "/img/pollo picante.jpg"
}
const Pizza = ({ onBack }) => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001')

        if (!response.ok) {
          throw new Error('No fue posible obtener la pizza.')
        }

        const data = await response.json()
        setPizza(data)
      } catch (error) {
        setError('No se pudo cargar la pizza. Comprueba que el backend esté funcionando.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getPizza()
  }, [])

  if (loading) {
    return <main className="container py-5 text-center">Cargando pizza...</main>
  }

  if (error) {
    return <main className="container py-5"><p className="alert alert-danger">{error}</p></main>
  }

  if (!pizza) return null

  return (
    <main className="container py-5">
      <section className="row g-4 align-items-center bg-white rounded shadow-sm p-3 p-md-4">
        <div className="col-12 col-md-6">
          <img
            src={imagenes[pizza.name] || pizza.img}
            alt={`Pizza ${pizza.name}`}
            className="img-fluid rounded pizza-detail-image"
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="text-capitalize mb-3">Pizza {pizza.name}</h1>
          <p>{pizza.desc}</p>
          <h2 className="h4">Ingredientes:</h2>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={`${ingredient}-${index}`} className="text-capitalize">{ingredient}</li>
            ))}
          </ul>
          <h2 className="h4 mt-4">Precio: ${pizza.price.toLocaleString('es-CL')}</h2>
          <button className="btn btn-dark mt-3" type="button">
            Añadir al carrito 🛒
          </button>
          {onBack && (
            <button className="btn btn-outline-secondary mt-3 ms-2" type="button" onClick={onBack}>
              Volver
            </button>
          )}
        </div>
      </section>
    </main>
  )
}

export default Pizza
