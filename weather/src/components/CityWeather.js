import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import SideBar from './SideBar';
import CityImage from './CityImage';
import CityForecast from './CityForecast';
import CityWindy from './CityWindy';
import CityWeatherDaily from './CityWeatherDaily';

import { getCityImage, getForecastWeather } from '../actions';
import { getCountryName } from '../utils/getCountryName';
import { timestampToDatetime } from '../utils/timestempToDatetime.js';

// const CityWeather = ({ city, getCityImage, getForecastWeather }) => {
//   const countryName = getCountryName(city.sys.country);
//   const sunrise = timestampToDatetime(city.sys.sunrise);
//   const sunset = timestampToDatetime(city.sys.sunset);

//   useEffect(
//     () => {
//       async function fetchData() {
//         await getCityImage(countryName);
//         await getForecastWeather(city.id);
//       }
//       fetchData();
//     },
//     // eslint-disable-next-line
//     [city]
//   );

//   return !city ? (
//     <SideBar />
//   ) : (
//     <div className='content'>
//       <SideBar />
//       <main class='city-view'>
//         <CityImage />
//         <CityWeatherDaily sunrise={sunrise} sunset={sunset} city={city} />
//         <div class='detail'>
//           <CityForecast />
//           <CityWindy city={city} />
//         </div>
//       </main>
//     </div>
//   );
// };

class CityWeather extends Component {
  componentDidMount() {
    this.props.getCityImage(getCountryName(this.props.city.sys.country));
    this.props.getForecastWeather(this.props.city.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      const fetchData = async () => {
        await this.props.getCityImage(
          getCountryName(this.props.city.sys.country)
        );
        await this.props.getForecastWeather(this.props.city.id);
      };
      fetchData();
    }
  }

  render() {
    return (
      <Fragment>
        <div className='content'>
          <SideBar />
          <main class='city-view'>
            <CityImage />
            <CityWeatherDaily
              sunrise={timestampToDatetime(this.props.city.sys.sunrise)}
              sunset={timestampToDatetime(this.props.city.sys.sunset)}
              city={this.props.city}
            />
            <div class='detail'>
              <CityForecast />
              <CityWindy city={this.props.city} />
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { getCityImage, getForecastWeather }
)(CityWeather);
