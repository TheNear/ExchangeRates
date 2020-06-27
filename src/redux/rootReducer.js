import { combineReducers } from "redux";
import { currencyReducer } from "./currency/reducer.js";
import { favoriteCurrencyReducer } from "./favoriteCurrency/reducer.js";
import { exchangeCurrencyReducer } from "./exchangeCurrency/reducer.js";

export default combineReducers({
  currencyReducer,
  favoriteCurrencyReducer,
  exchangeCurrencyReducer,
});
