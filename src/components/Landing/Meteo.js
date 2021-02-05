import React, {useState} from 'react';
import {fetchWeather} from './fetchWeather'
import '../../../src/App.css'

const Meteo =  () =>  {

        const [query, SetQuery] = useState('');
        const [weather, setWeather] = useState({});
        const search = async(e) =>{
          if (e.key === 'Enter'){
            const data = await fetchWeather (query)
            setWeather(data);
            SetQuery('');
          }
        }

    return (
        <div className="main-container">
            <h1>Recherchez la météo d'une ville</h1>
        <input  type="text" className="search" placeholder="Bourg-Palette.." value={query} onChange={(e) => SetQuery(e.target.value) } onKeyPress={search}/>
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
            </div>
        )}
      </div>
    )
  
}

export default Meteo


 