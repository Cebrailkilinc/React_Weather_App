import { useState, useContext, useEffect } from 'react'
import WeatherContext from '../context/WeatherContext'
import "./card.css"
import "./dropdown.css"

function DropMenu() {

  const {
    weatherData,
    cities,
    coord,
    setCoord,
    setCityName } = useContext(WeatherContext)

  const [cityData, setCityData] = useState([])
  const [deger, setDeger] = useState("ADANA")
  
  //Şehirlere istek yapıldı.
  useEffect(() => {
    fetch(cities)
      .then((res) => res.json())
      .then((data) => setCityData(data))
      
  }, [])
  // Dropdown'daki değerler burda tanımlanan fonksiyonla alındı.
  const onChangeDrop = (e) => {
    const values = e.target.value
    setDeger(values)
    setCityName(values)
                                        //deger : Dropdowndaki değer. 
  }                                    //cityData : Şehirlere ait konum ve id bilgisi.
  const sendData = () =>{              //coord : Şehirlere ait koordinat verisi.    
    cityData.map((xy) => {
      if (deger === xy.name) {
        setCoord({lat:xy.lat, long:xy.long })       
      }  
    })
  }

  useEffect(()=>{
    sendData()
  }, [deger]) 

  return (
    <div>
      <select className='drop-menu' onChange={onChangeDrop} >
        {
          cityData.map((item, i) => {
            return <option className='drop-menu-item' key={i}  >{item.name}</option>
          })
        }
      </select>
      

    </div>
  )
}

export default DropMenu