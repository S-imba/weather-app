import React, { useState } from 'react'
import './App.css';


const weather_API_Key = {
  key : "908e1279e9312c592fb9f563f5ce02a5",
  base : "https://api.openweathermap.org/data/2.5/"
};


function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  //search event
  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${weather_API_Key.base}weather?q=${query}&units=metric&APPID=${weather_API_Key.key}`) //fetch data from API
      .then(res => res.json()) //result converted to json
      .then(result => { //result to setWeather and setQuery reset
        setWeather(result)
        setQuery('')
      })
    }
  }
  //date Builder
  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let date = d.getDate()
    return `${day}, ${month} ${date}`
  }

  return (
    <div className={
      (typeof weather.main != "undefined") 
        ? ((weather.main.temp > 20) 
          ? 'App warm' : 'App') 
            : 'App'
    }>
      <main>
        {/*Search box*/}
        <div className='search-box'>
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
            onChange={e => setQuery(e.target.value)} 
            value={query}
            onKeyPress={search} />
        </div>

        {/*location and date box*/}
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='location-box'>
              <div className='location'>{ weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>

            {/*weather box - temperature and weather*/}
            <div className='weather-box'>
              <div className='temperature'>{Math.round(weather.main.temp)}°C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
