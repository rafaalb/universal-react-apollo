import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg) translateY(-20px);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export default class IlustrationDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'black'
    }
  }
  render() {
    const { item } = this.props;
    if (item.product && item.product.product_image) {
      const IMAGE_URL = item.product.product_image;
      return (
        <Item>
          <img src={IMAGE_URL} alt={item.name} />
          <Title>
            <Link to={`/ilustration/${item.name}`}>
              {item.name}
            </Link>
          </Title>
        </Item>
      )
    }
    return null
  }
}
