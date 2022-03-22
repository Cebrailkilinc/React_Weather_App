import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import WeatherContext from '../context/WeatherContext'
import "./forecast.css"

function Forecast() {

    const {
        
        weatherData,
         } = useContext(WeatherContext)


    const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    return (
        <div>
            <div className='row def'>
                {
                    weatherData.daily?.slice(1,8).map((item,i) => {
                        var myDate = new Date(item.dt * 1000);
                        const dayNumber = myDate.getDay()

                        return (
                            <div key={i} className='col-sm-2  border rounded forCard'>
                                <h5>{days[dayNumber]}</h5>
                                <img src={`icons/${item.weather[0].icon}.svg`} />
                                <h6>Max Temp: {item.temp.max+"°"}</h6>
                                <h6>Min Temp: {item.temp.min + "°"}</h6>
                                <h6>Humidity: {item.humidity +" "+"%"  }</h6>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Forecast