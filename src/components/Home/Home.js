
import React from 'react'
import Navbar from '../Navbar/Nav'
import './Home.css'
function Home() {
  return (
    <section id='home' >
      <div className='container-h' >
        < Navbar />
        <div className='content-h'>
          <div className='h-h'>
            <h1>Se exercite na academia <b>Power Up</b></h1>
            <h2>O unico treino ruim é aquele que você <b>Pula</b></h2>
          </div>
          <div >
            <a href='#descubra'>
              <button className='btn-h'>Saiba mais</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home