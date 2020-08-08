import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'
import store, { history, persistor } from 'store'

import App from 'app/index';

const HyperionSocketClient = require('@eosrio/hyperion-stream-client').default;
const client = new HyperionSocketClient('http://127.0.0.1:7770', {async: false});
client.onConnect = (data) => {
  console.log("connected")
  console.log(process.env.ES_PASSWORD)
  // client.disconnect();
}

const AppBundle = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
          <>
            <App client={client}/>
            <div id="modal"></div>
          </>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(AppBundle, rootElement);
} else {
  render(AppBundle, rootElement);
}
