import React, { Component } from 'react';

import CityWeatherHigh from './CityWeatherHigh';
import SearchBar from './SearchBar';
import Alert from './Alert';

import '../css/style.css';
import SideBar from './SideBar';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <Alert />
        <SearchBar />
        <div className='content'>
          <SideBar />
          <CityWeatherHigh />
        </div>
      </div>
    );
  }
}

export default App;
