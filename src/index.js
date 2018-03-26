/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import'./css/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Game from './containers/Game';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import'./css/main.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
