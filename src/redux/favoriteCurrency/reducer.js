import { SET_FAVORITE, CHANGE_FAVORITE_LIST } from './types.js';

const initialState = {
  currency: JSON.parse(localStorage.getItem('favoritesCur')) || {
    "ID": "R01",
    "NumCode": "643",
    "CharCode": "RUB",
    "Nominal": 1,
    "Name": "Российский рубль",
    "Value": 1.00,
    "Previous": 1.00
  },
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