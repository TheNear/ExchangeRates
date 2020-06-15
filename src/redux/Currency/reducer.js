import { GET_CURRENCY } from "./types.js";

const initialState = [];

export const currencyReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case GET_CURRENCY: 
      return [...state, ...action.payload];
    default:
      return state;
  }
}