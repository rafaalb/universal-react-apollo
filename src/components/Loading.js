import React from 'react'
import { Item } from './IlustrationDetail';
import styled from 'styled-components'

const EmptyImg = styled.div`
  width: 468px;
  height: 400px;
  border-radius: 3px;
  border: 0.5px solid #E5E5E5;
  background: linear-gradient(to right,#f1f1f1 30%,#e5e5e5 50%,#f1f1f1 70%)!important;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  background-size: 800px 104px;
  margin-bottom: 20px;
`;
const items = Array.from(Array(8).keys());

export default () => {
  return items.map(item => 
    <Item key={`${item}-loading`}>
      <EmptyImg />
    </Item>
  );
}

export { EmptyImg }
