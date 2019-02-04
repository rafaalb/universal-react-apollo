import express from 'express';
import React from 'react';
import App from './client/App';
import Html from './client/Html';
import { renderToString } from 'react-dom/server'
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { StaticRouter } from 'react-router';
import ApolloClient from './lib/withData';
import path from 'path'
import { ServerStyleSheet } from 'styled-components';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

const port = 3000;
const server = express();

server.use('/static', express.static('dist'))

server.get('*', async (req, res) => {
  const context = {}
  
  const statsFile = path.resolve('dist/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile })

  const sheet = new ServerStyleSheet(); 
  const client = ApolloClient();
  const component = (
    <ChunkExtractorManager extractor={extractor}>
      <ApolloProvider client={client}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </ChunkExtractorManager>
  );
  /**
   * renderToStringWithData() will take our React app and turn it into a string
   * to be inserted into our Html template function.
  */
  const body = await renderToStringWithData(component);
  // console.log(extractor.getScriptTags())
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