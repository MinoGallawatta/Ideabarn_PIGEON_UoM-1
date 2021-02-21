import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import configureStore from './store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from "./config/firebaseConfig";

const store = configureStore();
const rrfConfig = {};
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more aboutUs service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
