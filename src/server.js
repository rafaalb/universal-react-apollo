import express from 'express';
import React from 'react';
import App from './client/App';
import Html from './client/Html';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { StaticRouter } from 'react-router';
import ApolloClient from './lib/withData';
import { ServerStyleSheet } from 'styled-components';

const port = 3000;
const server = express();

server.use('/static', express.static('dist'))

server.get('*', async (req, res) => {
  const context = {}
  const sheet = new ServerStyleSheet(); 
  const client = ApolloClient();
  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );
  /**
   * renderToStringWithData() will take our React app and turn it into a string
   * to be inserted into our Html template function.
  */
  const body = await renderToStringWithData(component);

  const styles = sheet.getStyleTags();
  const title = 'Crystallize';

  res.send(
    Html({
      body,
      title,
      styles
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);