import React from 'react'
import Carta from './Carta'
import {cartas} from '../js/cartas'

function Cartas() {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
        <h1 className='text-center text-white'>Erick miguel Castro Camacho</h1> 
          {
            cartas.map(carta =>(
              <div key={carta.id} className="col-md-4">
                <Carta titulo={carta.titulo} imagen={carta.imagen} url={carta.url} texto={carta.texto} />
              </div>)) 
          }
        </div>
      </div>
    </>
  )
}

export default Cartas