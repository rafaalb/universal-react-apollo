import React from 'react';
import { hydrate } from 'react-dom';
import ApolloClient from './../lib/withData';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
// import { loadableReady } from '@loadable/component'

const client = ApolloClient();

import App from './App';
/* hydrate on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience. */
const app = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
// loadableReady(() => {
  hydrate(app, document.getElementById('app'));
// })
