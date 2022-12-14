import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

//REDUX SETUP
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
