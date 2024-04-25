import React, {useState, useContext} from 'react'
import Cartas from './Cartas'
import '../css/home.css'

function Home() {
  return (
    <div className='home'>
      <Cartas/>
    </div>
  )
}

export default Home