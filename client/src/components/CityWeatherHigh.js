import React, { Component, Fragment } from 'react';
import { getCityWeather, getCurLocWeahter, setAlert } from '../actions';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import CityWeather from './CityWeather';

class CityWeatherHigh extends Component {
  componentDidMount() {
    const geolocation = window.navigator.geolocation;
    geolocation.getCurrentPosition(
      position =>
        this.props.getCurLocWeahter(
          position.coords.latitude,
          position.coords.longitude
        ),
      error => this.props.setAlert(error.message, 'danger', false)
    );
  }

  render() {
    return !this.props.weather.citiesCollection ? (
      <Spinner />
    ) : (
      <Fragment>
        <CityWeather city={this.props.weather.citiesCollection} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getCityWeather, getCurLocWeahter, setAlert }
)(CityWeatherHigh);
