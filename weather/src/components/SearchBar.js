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
        <img src={require('../img/logo.png')} alt='W logo' className='logo' />
        <form onSubmit={this.onFormSubmit} className='search'>
          <label className='search__label'>Search World Weather </label>
          <br />
          <input
            type='text'
            placeholder='Ex. Taipei, TW'
            value={this.state.term}
            onChange={this.onFormChange}
            className='search__input'
          />
          <button className='search__button'>
            <i className='fas fa-search-location' />
          </button>
        </form>
        <nav className='user-nav'>
          <div className='user-nav__user'>
            <a
              href='https://github.com/JingHuang-Su/Weather-Project'
              className='user-nav__user-name'
            >
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
