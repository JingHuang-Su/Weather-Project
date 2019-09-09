import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityImage } from '../actions/index';

import Spinner from '../layout/Spinner';
import CityImageCard from './CityImageCard';

class CityImage extends Component {
  render() {
    return !this.props.weather.cityImage ? (
      <Spinner />
    ) : (
      <div className='gallery'>
        {this.props.weather.cityImage.map(img => (
          <CityImageCard key={img.id} img={img} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getCityImage }
)(CityImage);
