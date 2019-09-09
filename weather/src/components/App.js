import React, { Component } from 'react';

import CityWeatherHigh from './CityWeatherHigh';
import SearchBar from './SearchBar';
import Alert from './Alert';

import '../css/style.css';

export class App extends Component {
  render() {
    return (
      <div class='container'>
        <Alert />
        <SearchBar />
        <CityWeatherHigh />
      </div>
    );
  }
}

export default App;
