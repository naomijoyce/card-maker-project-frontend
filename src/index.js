import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as serviceWorker from './serviceWorker';

import designReducer from "./reducers/designReducer";
import eventReducer from "./reducers/eventReducer";
import inviteReducer from "./reducers/inviteReducer";
import userReducer from "./reducers/userReducer";
import { PersistGate } from 'redux-persist/integration/react';

const rootReducer = combineReducers({
  designInfo: designReducer,
  eventInfo: eventReducer, 
  inviteInfo: inviteReducer,
  userInfo: userReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['userInfo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>
     
    
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
