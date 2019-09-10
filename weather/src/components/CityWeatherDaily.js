import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../actions';
import { weatherCondition } from '../utils/weatherCondition';

const CityWeatherDaily = ({ city, sunrise, sunset, addFav, removeFav }) => {
  let [isClicked] = useState(false);
  const onClickFav = () => {
    if (JSON.parse(window.localStorage.getItem('favoriate')) === null) {
      isClicked = false;
    } else {
      isClicked = JSON.parse(
        window.localStorage
          .getItem('favoriate')
          .includes(`${city.name}, ${city.sys.country}`)
      );
    }

    if (isClicked === false) {
      isClicked = true;
      return addFav(`${city.name}, ${city.sys.country}`);
    } else {
      isClicked = false;
      return removeFav(`${city.name}, ${city.sys.country}`);
    }
  };
  const icon = `${weatherCondition[city.weather[0].main]} fa-1x`;

  return (
    <div className='daily'>
      <h1 className='daily__city'>
        <i className='fas fa-map-marker-alt' />
        {city.name}, {city.sys.country}
      </h1>
      <div className='daily__temp'>
        <div className='daily__temp-average'>Avg. {city.main.temp}°C</div>
        <div className='daily__temp-maxmin'>
          <div className='daily__temp-max'>Max. {city.main.temp_max}°C</div>
          <div className='daily__temp-min'>Min. {city.main.temp_min}°C</div>
        </div>
      </div>
      <div className='daily__weather'>
        <i className={icon} />
        <div className='daily__weather-description'>
          <span>{city.weather.description}</span>
          <span>Cloudiness:{city.clouds.all}%</span>
        </div>
      </div>
      <div className='daily__wind'>
        <div className='daily__wind-text'>Wind</div>
        <div className='daily__wind-speed'>
          Speed: <span>{city.wind.speed}</span> m/s
        </div>
        <div className='daily__wind-deg'>
          Degree: <span>{city.wind.deg}</span>°
        </div>
      </div>
      <div className='daily__other'>
        <div className='daily__other-humidity'>
          Humidity: <span>{city.main.humidity}</span>%
        </div>
        <div className='daily__other-sunrise'>
          <i className='fas fa-sun fa-1x' title='sunrise' />
          <span>{sunrise}</span> a.m
        </div>
        <div className='daily__other-sunset'>
          <i className='fas fa-moon fa-1x' title='sunset' />
          <span>{sunset}</span> p.m
        </div>
      </div>
      <div className='daily__favoriate'>
        <button className='far fa-heart fa-2x' onClick={onClickFav} />
      </div>
    </div>
  );
};

export default connect(
  null,
  { addFav, removeFav }
)(CityWeatherDaily);
