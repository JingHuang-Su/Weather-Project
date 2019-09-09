import React, { Component } from 'react';
// import Spinner from '../layout/Spinner';
class CityImageCard extends Component {
  render() {
    return (
      <figure className='gallery__item'>
        <img
          alt={this.props.img.description}
          src={this.props.img.urls.regular}
          className='gallery__photo'
        />
      </figure>
    );
  }
}

export default CityImageCard;
