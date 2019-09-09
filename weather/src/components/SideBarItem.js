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
    <div class='side-nav__item'>
      <button
        class='side-nav__button side-nav__button--text'
        onClick={onButtonClick}
      >
        <i class='fas fa-location-arrow' />
        <span>{item}</span>
      </button>
      <button
        class=' side-nav__button side-nav__button--cancel'
        onClick={onCancelClick}
      >
        <i class='far fa-window-close' />
      </button>
    </div>

    // <li class='side-nav__item side-nav__item--active'>
    //   <a href='/' class='side-nav__link'>

    //   </a>
    // </li>
  );
};

export default connect(
  null,
  { getCityWeather, removeFav }
)(SideBarItem);
