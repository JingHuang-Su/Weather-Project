import React from 'react';

class CityWindy extends React.Component {
  renderMap = () => {
    const options = {
      // Required: API key
      key: 'aRDr59vtFbKCBJAgK09YCnnxT4FLGN0f', // REPLACE WITH YOUR KEY !!!

      // Put additional console output
      // verbose: false,

      // Optional: Initial state of the map
      lat: this.props.city.coord.lat,
      lon: this.props.city.coord.lon,
      zoom: 5
    };

    // Initialize Windy API
    window.windyInit(options, windyAPI => {
      // windyAPI is ready, and contain 'map', 'store',
      // 'picker' and other usefull stuff

      const { map } = windyAPI;
      // .map is instance of Leaflet map

      window.L.popup()
        .setLatLng([this.props.city.coord.lat, this.props.city.coord.lon])
        .setContent(`this is your search ${this.props.city.name}`)
        .openOn(map);
    });
  };
  render() {
    return (
      <div className='user-review' id='windy'>
        {this.renderMap()}
      </div>
    );
  }
}

export default CityWindy;
