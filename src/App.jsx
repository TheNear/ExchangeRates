import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import CurrencyConvertorPage from './pages/CurrencyConvertorPage';
import { StylesProvider } from '@material-ui/core/styles';


function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <CurrencyConvertorPage />
      </StylesProvider>
    </Provider>
  );
}

export default App;
