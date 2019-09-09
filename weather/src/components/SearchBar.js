import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCityWeather } from '../actions';

export class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = async e => {
    e.preventDefault();
    //ToDo: the final version of the weather project will
    //has a feature that could let user to collect favoriate cities
    //therefore we need to check the collect array that can not have
    //same city appeared twice in that array.

    this.props.getCityWeather(this.state.term);
    this.setState({ term: '' });
  };

  onFormChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <header className='header'>
        <img src={require('../img/logo.png')} alt='W logo' class='logo' />
        <form onSubmit={this.onFormSubmit} className='search'>
          <label class='search__label'>Search World Weather </label>
          <br />
          <input
            type='text'
            placeholder='Taipei, TW'
            value={this.state.term}
            onChange={this.onFormChange}
            className='search__input'
          />
          <button class='search__button'>
            <i class='fas fa-search-location' />
          </button>
        </form>
        <nav className='user-nav'>
          <div className='user-nav__user'>
            {/* <img
              src={require('../img/user.png')}
              alt='img'
              className='user-nav__user-photo'
            /> */}
            <a href='http://localhost:3000' className='user-nav__user-name'>
              Version 1.0
            </a>
            <p> &copy; JingHuang-Su</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  { getCityWeather }
)(SearchBar);
