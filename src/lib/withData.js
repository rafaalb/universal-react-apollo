import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import fetch from 'node-fetch';

function createClient() {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    fetch
  });
}

export default createClient;
