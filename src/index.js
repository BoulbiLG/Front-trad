import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
//import { fetchJournalData, setSelectedOptionTypeTrade, setCollectionValues } from "./actions/journalActions";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
/*
store.dispatch(fetchJournalData());
store.dispatch(setSelectedOptionTypeTrade());
store.dispatch(setCollectionValues());
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);