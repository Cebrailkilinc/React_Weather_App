import React from 'react'
import Card from './Card'
import Forecast from './Forecast'
import Header from './Header'
function Container() {
  return (
    <div className='container'>
      <Header/>
      <Card />
      <Forecast />
    </div>

  )
}

export default Container
