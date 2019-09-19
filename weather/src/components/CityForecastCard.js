import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { weatherCondition } from '../utils/weatherCondition';

class CityForecastCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: 4 };
    // this.loadMore = this.loadMore.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({ visible: 4 });
    }
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 4 };
    });
  };

  render() {
    const items = this.props.items;
    // const icon = `${weatherCondition[items.weather[0].icon]} fa-1x`;

    return !this.props.items ? (
      <Spinner />
    ) : (
      <Fragment>
        {items.slice(0, this.state.visible).map(item => {
          return (
            <div className='description_item'>
              <div className='daily_top'>
                <div className='daily_date'>{item.dt_txt}</div>
                <div className='daily__temp'>
                  <div className='daily__temp-maxmin'>
                    <div className='daily__temp-max'>
                      Max. {item.main.temp_max}°C
                    </div>
                    <div className='daily__temp-avg'>
                      Avg. {item.main.temp}°C
                    </div>
                    <div className='daily__temp-min'>
                      Min. {item.main.temp_min}°C
                    </div>
                  </div>
                </div>
              </div>
              <div className='daily_down'>
                <div className='daily_down-even'>
                  <i
                    className={`${
                      weatherCondition[item.weather[0].main]
                    } fa-1x`}
                  />
                  <div className='daily__weather-description'>
                    <span>{item.weather[0].description}</span>
                    <span>Cloudiness: {item.clouds.all}</span>
                  </div>
                </div>
                <div className='daily_down-even'>
                  <div className='daily__wind-text'>Wind</div>
                  <div className='daily__wind-speed'>
                    Speed: <span>{item.wind.speed}</span> m/s
                  </div>
                  <div className='daily__wind-deg'>
                    Degree: <span>{item.wind.deg}</span>°
                  </div>
                </div>
                <div className='daily_down-even'>
                  <div className='daily__other-humidity'>
                    Humidity: <span>{item.main.humidity}</span>%
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {this.state.visible < items.length && (
          <button
            onClick={this.loadMore}
            type='button'
            className='description_button'
          >
            Load more
          </button>
        )}
      </Fragment>
    );
  }
}

export default CityForecastCard;
