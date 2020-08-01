import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const HyperionSocketClient = require('@eosrio/hyperion-stream-client').default;
const client = new HyperionSocketClient('http://127.0.0.1:7770', {async: true});
console.log(client)
client.onConnect = () => {
  client.streamActions({
    contract: 'eosio',
    action: 'voteproducer',
    account: '',
    start_from: '2020-03-15T00:00:00.000Z',
    read_until: 0,
    filters: [],
  });
}

// see 3 for handling data
client.onData = async (data, ack) => {
    console.log(data); // process incoming data, replace with your code
    ack(); // ACK when done
}

client.connect(() => {
  console.log('connected!');
})

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// client.onConnect = () => {
//   client.streamActions({
//     contract: 'eosio',
//     action: 'voteproducer',
//     account: '',
//     start_from: '2020-03-15T00:00:00.000Z',
//     read_until: 0,
//     filters: [],
//   });
// }

// see 3 for handling data
client.onData = async (data, ack) => {
    console.log(data); // process incoming data, replace with your code
    ack(); // ACK when done
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
