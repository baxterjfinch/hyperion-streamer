import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'
import store, { history, persistor } from 'store';
import App from './App';

const HyperionSocketClient = require('@eosrio/hyperion-stream-client').default;
const client = new HyperionSocketClient('http://127.0.0.1:7770', {async: false});


client.connect(() => {

})

// client.onLIB = async (data) => {
//   console.log(data)
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

client.onConnect = (data) => {
  console.log("connected")

  // client.disconnect();
}


const AppBundle = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <>
          <App/>
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
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
