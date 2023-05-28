import React from 'react'

const Variables = () => {
    const saludo = "Hola Mundo"
    const imagen = "https://fastly.picsum.photos/id/927/536/354.jpg?hmac=OuFErMeN38u2De0WomefbRuytirCpHz8OqOnO3hU-I8"
    const text_alternativo = "Esta es una imagen"
  return (
    <div>
        <h1>{saludo}</h1>
        <img src= {imagen} alt={text_alternativo}/>
    </div>
  )
}

export default Variables