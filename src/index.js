import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux setup
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
