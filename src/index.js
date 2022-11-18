import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import rootReducer from "./redux/reducers/index";
import 'font-awesome/css/font-awesome.min.css';
//import 'bootstrap/dist/css/bootstrap.css';


import {store, persistor } from './store'
import './bootstrap.min.css'
import * as serviceWorkers from './serviceWorkers'
import { PersistGate } from 'redux-persist/integration/react';

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

serviceWorkers.unregister();


