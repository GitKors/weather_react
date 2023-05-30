import React from 'react';
import '../Styles/weather.css';

function WeatherComponent(props) {
  let city = '';
  let temp = '';
  let wind = '';
  let weather = [];
  let date = '';

  if (props.data.name) {
  
    city = props.data.name;
    temp = JSON.stringify(Math.round(props.data.main?.temp - 273)) + 'C°';
    wind = JSON.stringify(props.data.wind?.speed) + ' м/с';
    weather = props.data.weather?.filter(x => x.description).map(x => x.description) || [];
    date = props.data.dt_txt
  } else if (props.data.dt_txt) {

    city = '';
    temp = JSON.stringify(Math.round(props.data.main?.temp - 273)) + 'C°'; 
    wind = JSON.stringify(props.data.wind?.speed) + ' м/с'; 
    weather = props.data.weather?.filter(x => x.description).map(x => x.description) || [];
    date = props.data.dt_txt
  }

  return (
    <div className='container-cart'>
      <div className='weather-cart'>
        <p className='dates'>{date ? date.slice(0, 10).split('-').reverse().join('-') : '' }</p>
        <p className='city_main'>{city}</p>
        <div className='temp_icon'>
          <div className='icon_container'>
            <img
              className='icon'
              src={`https://openweathermap.org/img/wn/${props.data.weather?.filter(x => x.icon).map(x => x.icon)}@2x.png`}
              alt='icon'
            />
          </div>
          <p className='temperature'>{temp}</p>
        </div>
        <p className='wind'>Скорость ветра: {wind}</p>
        <p className='weather_main'>Погода: {weather}</p>
      </div>
    </div>
  );
}

export default WeatherComponent;