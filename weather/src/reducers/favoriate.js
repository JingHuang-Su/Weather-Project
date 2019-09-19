import * as GET from '../actions/types';

let initialState = JSON.parse(window.localStorage.getItem('favoriate'));
console.log(initialState);

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET.ADD_FAV:
      if (state.includes(payload)) {
        window.localStorage.setItem('favoriate', JSON.stringify([...state]));
        return state;
      } else {
        window.localStorage.setItem(
          'favoriate',
          JSON.stringify([...state, payload])
        );
        return [...state, payload];
      }

    case GET.REMOVE_FAV:
      window.localStorage.setItem(
        'favoriate',
        JSON.stringify(state.filter(i => i !== payload))
      );
      return state.filter(i => i !== payload);
    default:
      return state;
  }
};
