import React from 'react'
import { Item } from './IlustrationDetail'
import { EmptyImg } from './Loading'
import { gql } from 'apollo-boost'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'


const SINGLE_ITEM_QUERY = gql`
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

const Text = styled.span`
  text-align: center;
  font-size: 25px;
`;

export default ({ location }) => {
  const qs = new URLSearchParams(location.search)
  return (
    <div>
      <Link to={'/'}>
        {`< Back`}
      </Link>
      <Query
        query={SINGLE_ITEM_QUERY}
        ssr={false}
      >
        {({ data }) => {
          if (data.catalogue) {
            const item = data.catalogue.children.find(ilustration => ilustration.id == qs.get('id'));
            return (
              <Item>
                <img src={item.product.product_image} />
                <Text>{item.name}</Text>
              </Item>
            )
          }
          return null;
        }}
      </Query>
    </div>
  )
}
