import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'


function App() {

  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [temperature, settemperature] = useState()
  
      useEffect (() => {
    const succes = pos =>{
      const position = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
      }
      setCoords(position);
      
    }
    navigator.geolocation.getCurrentPosition(succes)
    },[])
    
    useEffect (() => {
    if(coords){
      const apyKey = "54ebfcc712e44a726769d32fd21e0d5c"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apyKey}`
      axios.get(URL)
      .then(res => {
        const celsius = (res.data.main.temp -273.15).toFixed(0)
        const farenheit = (celsius * 9/5 + 32).toFixed(0)
        settemperature ({celsius, farenheit})
        setweather(res.data)
      })
      .catch(err => console.log(err))
    }
  },[coords])

  console.log(weather)

  return (
    <div className="App">
      { weather ?
        <WeatherCard weather= {weather} 
        temperature= {temperature} 
        />
        :
        <Loading />
          
      }
       
    </div>
  )
}

export default App
