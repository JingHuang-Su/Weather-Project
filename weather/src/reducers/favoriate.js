import * as GET from '../actions/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET.ADD_FAV:
      const store = JSON.parse(window.localStorage.getItem('favoriate'));
      if (store) {
        window.localStorage.setItem(
          'favoriate',
          JSON.stringify([...store, payload])
        );
      } else {
        window.localStorage.setItem('favoriate', JSON.stringify([payload]));
      }
      return [...state, payload];
    case GET.REMOVE_FAV:
      const local = JSON.parse(window.localStorage.getItem('favoriate'));
      const newlocal = local.filter(i => i !== payload);
      if (local) {
        window.localStorage.setItem('favoriate', JSON.stringify(newlocal));
      }
      return state.filter(i => i !== payload);
    default:
      return state;
  }
};
