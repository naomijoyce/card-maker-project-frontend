import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';

import designReducer from "./reducers/designReducer";
import eventReducer from "./reducers/eventReducer";
import inviteReducer from "./reducers/inviteReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  designInfo: designReducer,
  eventInfo: eventReducer, 
  inviteInfo: inviteReducer,
  userInfo: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
