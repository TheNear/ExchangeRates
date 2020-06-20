import { SET_FAVORITE, CHANGE_FAVORITE_LIST } from './types.js';

const initialState = {
  currency: localStorage.getItem('favoritesCur') || 'RUB',
  list: JSON.parse(localStorage.getItem('favorites')) || [],
};

export const favoriteCurrencyReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SET_FAVORITE: 
      return { ...state, currency: action.payload }
    case CHANGE_FAVORITE_LIST:
      return { ...state, list: action.payload}
    default:
      return state;
  }
}