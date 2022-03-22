import { useContext, useEffect, useState } from 'react'
import WeatherContext from '../context/WeatherContext'
import DropMenu from "./DropMenu"


function Card() {
  const [currentTemp, setCurrentTemp] = useState("")

  const {  
    weatherData, 
    cityName } = useContext(WeatherContext)


  //setIcon(weatherData.current?.weather[0].icon)  
  const deger = (weatherData.current?.weather[0].icon)
  const date = new Date(); 


  try {
    let myFunction = () => { setCurrentTemp(weatherData.current?.temp_c) }
    setTimeout(myFunction, 1)
  } catch (err) {
    console.log(err)
  }

  return (

    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 align-self-center' >
          < DropMenu />
        </div>
        <div className='col-sm-12 col-md-6 d-flex ' >
          <h2 className='align-self-center mx-auto my-auto  display-1'>{Math.round(weatherData.current?.temp)}°C</h2>
          <img className='icon-svg mx-auto my-auto' src={`icons/${deger}.svg`} />
          <div className='align-self-center mx-auto my-auto '>
            <h2 className='align-self-center mx-auto ' >{cityName}</h2>
            <h6>{date.toDateString()}</h6>           
          </div>
        </div>
      </div>





    </div>
  )
}

export default Card