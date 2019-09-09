import * as GET from '../actions/types';

const initialState = {
  loading: true,
  forecastWeather: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET.FORECASTWEATHER:
      return {
        ...state,
        loading: false,
        forecastWeather: payload
      };

    default:
      return state;
  }
};
