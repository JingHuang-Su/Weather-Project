import openWeatherMap from '../api/openweathermap';
import unsplash from '../api/unsplash';
import * as GET from './types';
import uuid from 'uuid';

export const setAlert = (
  msg,
  alertType,
  needRemove,
  timeout = 5000
) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: GET.SET_ALERT,
    payload: { msg, alertType, id }
  });
  if (needRemove) {
    setTimeout(
      () => dispatch({ type: GET.REMOVE_ALERT, payload: id }),
      timeout
    );
  }
};

//getCityWeather
export const getCityWeather = city => async dispatch => {
  try {
    const res = await openWeatherMap.get(
      `/weather?q=${city}&appid=b36202d3fd732e38e4b5aacb7a484301&units=metric`
    );
    console.log(res);

    dispatch({
      type: GET.CITYWEATHER,
      payload: res.data
    });
  } catch (error) {
    dispatch(setAlert('沒有此城市的資訊', 'danger', true));
  }
};

// export const getTerm = term => async dispatch => {
//   dispatch({
//     type: GET.SEARCHTERM,
//     payload: term
//   });
// };

export const getCityImage = cityName => async dispatch => {
  const res = await unsplash.get('/search/photos', {
    params: { query: cityName }
  });

  dispatch({
    type: GET.CITYIMAGE,
    payload: res.data.results.slice(0, 3)
  });
};

// getCurrentLocationWeather
export const getCurLocWeahter = (lat, lon) => async dispatch => {
  const res = await openWeatherMap.get(
    `/weather/?lat=${lat}&lon=${lon}&appid=b36202d3fd732e38e4b5aacb7a484301&units=metric`
  );

  dispatch({
    type: GET.CITYWEATHER,
    payload: res.data
  });
};

export const getForecastWeather = cityId => async dispatch => {
  const res = await openWeatherMap.get(
    `/forecast?id=${cityId}&appid=b36202d3fd732e38e4b5aacb7a484301&units=metric`
  );

  dispatch({
    type: GET.FORECASTWEATHER,
    payload: res.data
  });
};

export const addFav = city => dispatch => {
  dispatch({
    type: GET.ADD_FAV,
    payload: city
  });
};

export const removeFav = city => dispatch => {
  dispatch({
    type: GET.REMOVE_FAV,
    payload: city
  });
};
