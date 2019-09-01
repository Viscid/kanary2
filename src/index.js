import React from 'react';
import ReactDOM from 'react-dom';
import Kanary2 from './Kanary2';

import { Provider } from 'react-redux';
import { store, persistor} from './store';

import * as serviceWorker from './serviceWorker';

import { Helmet } from 'react-helmet';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Helmet>
        <title> Kanary </title>
        <link href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans|Barlow+Semi+Condensed|Didact+Gothic|Ropa+Sans|Zilla+Slab&display=swap" rel="stylesheet" />
    </Helmet>
    <Kanary2 />
  </PersistGate>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
