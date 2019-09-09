import * as GET from '../actions/types';

const initialState = {
  loading: true,
  searchTerm: null,
  currentLocationData: [],
  citiesCollection: null,
  cityImage: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET.SEARCHTERM:
      return {
        ...state,
        loading: false,
        searchTerm: payload
      };
    case GET.CITYWEATHER:
      return {
        ...state,
        loading: false,
        citiesCollection: payload
      };

    case GET.CITYIMAGE:
      return {
        ...state,
        loading: false,
        cityImage: payload
      };

    default:
      return state;
  }
};
