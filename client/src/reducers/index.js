import { combineReducers } from 'redux';

import weatherReducer from './weather';
import forecastReducer from './forecast';
import favoriateReducer from './favoriate';
import alertReducer from './alert';

export default combineReducers({
  alert: alertReducer,
  weather: weatherReducer,
  forecast: forecastReducer,
  favoriate: favoriateReducer
});
