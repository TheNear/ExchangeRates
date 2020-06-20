import { combineReducers } from "redux";
import { currencyReducer } from "./Currency/reducer.js";
import { favoriteCurrencyReducer } from "./favoriteCurrency/reducer.js";

export default combineReducers({
  currencyReducer,
  favoriteCurrencyReducer,
});
