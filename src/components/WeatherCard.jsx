import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

  const [isCelcius, setisCelcius] = useState(true)

  const changeTemperature = () => setisCelcius(!isCelcius)

   return (
    <article className='card'>
        <h1 className='card_title'>WEATHER APP</h1>
        <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='card_first_section'>
          <img className='card_icon' src= {weather &&`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
          
        </section>
        <section className='card_second_section'>
          <h3 className='second_title'>"{weather?.weather[0].description}"</h3>
          <ul className='second_list'>
            <li className='second_item'><span className='second_span'>Wind Speed:</span>{weather?.wind.speed} m/sec</li>
            <li className='second_item'><span className='second_span'>Clouds:</span>{weather?.clouds.all} %</li>
            <li className='second_item'><span className='second_span'>Humidity:</span>{weather?.main.humidity} %</li>
          </ul>
        </section>
        <h2 className='card_temperature'>{isCelcius ?`${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
        <button className='card_btn' onClick={changeTemperature}>{isCelcius ? "Temperature in °F" : "Temperature in °C"}</button>
    </article>
  )
}

export default WeatherCard