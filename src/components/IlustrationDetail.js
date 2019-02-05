import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const colors = ['#f6f2b2', '#c0d5ed', '##f0ddf0', '#6496d1', '#bbdccb', '#f3cc89', '#cab7eb', '#ed7e84']

const getColor = () => colors[Math.floor(Math.random() * 8)]

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
`;

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg) translateY(-20px);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  &:hover a {
    color: ${props => props.color};
  }
`;

export default class IlustrationDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: colors[0]
    }
  }
  componentDidMount() {
    this.setState({ color: getColor() })
  }
  render() {
    const { item } = this.props;
    if (item.product && item.product.product_image) {
      const IMAGE_URL = item.product.product_image;
      return (
        <Item>
          <img src={IMAGE_URL} alt={item.name} />
          <Title color={this.state.color}>
            <Link
              to={`/ilustration?id=${item.id}`}
            >
              {item.name}
            </Link>
          </Title>
        </Item>
      )
    }
    return null
  }
}

export { Item }