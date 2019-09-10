import React, { Component } from 'react';
import { connect } from 'react-redux';

import CityForecastCard from './CityForecastCard';
import Spinner from '../layout/Spinner';

class CityForecast extends Component {
  render() {
    return !this.props.forecast.forecastWeather ? (
      <Spinner />
    ) : (
      <div className='description'>
        <CityForecastCard
          visible={4}
          items={this.props.forecast.forecastWeather.list}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
});

export default connect(
  mapStateToProps,
  null
)(CityForecast);
