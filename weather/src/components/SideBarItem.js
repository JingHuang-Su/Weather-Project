import React from 'react';
import { connect } from 'react-redux';

import { getCityWeather, removeFav } from '../actions';

const SideBarItem = ({ item, getCityWeather, removeFav }) => {
  const onButtonClick = () => {
    getCityWeather(item);
  };
  const onCancelClick = () => {
    removeFav(item);
  };
  return (
    <div className='side-nav__item'>
      <button
        className='side-nav__button side-nav__button--text'
        onClick={onButtonClick}
      >
        <i className='fas fa-location-arrow' />
        <span>{item}</span>
      </button>
      <button
        className=' side-nav__button side-nav__button--cancel'
        onClick={onCancelClick}
      >
        <i className='far fa-window-close' />
      </button>
    </div>

    // <li className='side-nav__item side-nav__item--active'>
    //   <a href='/' className='side-nav__link'>

    //   </a>
    // </li>
  );
};

export default connect(
  null,
  { getCityWeather, removeFav }
)(SideBarItem);
