import React from 'react'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_ILUSTRATIONS = gql`
  query {
    catalogue(url: "/illustrations", tenantID: "demo") {
      children {
        id
        name
        link
        product {
          product_image
        }
      }
    }
  }
`;
export default () => {
  return (
    <Query query={GET_ILUSTRATIONS}>
      {({ data, error, loading }) => {
        console.log({
          data,
          loading,
          error
        })
        return <div>💅</div>;
      }}
    </Query>
  )
}
