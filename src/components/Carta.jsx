import React from 'react'
import PropTypes from 'prop-types'
import  '../css/cartas.css'

function Carta({titulo,texto, imagen, url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__zoomIn'>
    <div className="overflow">
    <img src={imagen} alt="" className='card-img-top'/>
    </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{titulo}</h4>
        <p className='card-text text-secondary'>
          {
            texto ? texto :' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, et.'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0 ' target='_blank'>
          Ir a la pagina web
        </a>
      </div>
    </div>
  )
}

Carta.propTypes ={
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string,
  imagen: PropTypes.string
}

export default Carta