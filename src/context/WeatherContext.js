
import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const cities = "https://gist.githubusercontent.com/FrknKoseoglu/dcbbb12e27d5e16ae4b2f864b9c2ae41/raw/1218ea96c54db789e1fed11958ee2fb7d47a4651/turkiye_il_koordinat_listesi_JSON.json"
    const API_KEY = "793a5f48ee58437dbe5221148220703"
    const API_KEY_2 = "7e9e4362be527b0868bf81e1d53e35ff"
    const [weatherData, setWeatherData] = useState({})
    const [coord, setCoord] = useState({ lat: "37", long: "35,321333" })
    const [cityName, setCityName] = useState("ADANA")
    const [temp, setTemp] = useState("")
    


    //console.log("lat" + coord.lat + " " + " log" + coord.long)
    // hava durumu verileri burada çağırıldı.
    //https://api.openweathermap.org/data/2.5/onecall?lat=37&lon=35,321333&units=metric&exclude=hourly,minutely,alerts&appid=7e9e4362be527b0868bf81e1d53e35ff
    async function fetchJson() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.long}&units=metric&appid=${API_KEY_2}`)
            const data = await response.json();
            setWeatherData(data)
           
        } catch (error) {
            console.log(error.message)
        }
    }

  

    useEffect(()=>{
        fetchJson()
    },[coord])    
    
    
    console.log(weatherData)

  

    const values = {
        cities,
        weatherData,
        coord,
        setCoord,
        setCityName,
        cityName,
        temp,
        setTemp
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export default WeatherContext; 