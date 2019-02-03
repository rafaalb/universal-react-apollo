import React from 'react'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import IlustrationDetail from './IlustrationDetail';

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

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
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
        if (!data.catalogue) return null;
        const items = data.catalogue.children
        return (
          <ItemsList>
            {items.map((item) => (
              <IlustrationDetail
                item={item}
                key={item.id}
              />
            ))}
          </ItemsList>
        )
      }}
    </Query>
  )
}
