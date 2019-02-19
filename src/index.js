import React from 'react';
import { Route, Switch } from 'react-router';
import Ilustration from './components/Ilustration'
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Ilustrations from './components/Ilustrations'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: Roboto Mono, monospace;
    background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px 100px 0px;
  width: 100%;
  height: 100%;
`;

const AppBar = styled.div`
  position: fixed;
  width: 100%;
  height: 74px;
  background: white;
  top: 0;
  z-index: 99;
  display: flex;
  padding: 10px;
  padding-left: 20px;
  align-items: center;
  img {
    height: 80%;
  }
`;


const Layout = () => {
  return (
    <AppContainer>
      <AppBar>
        <img src={'https://crystallize.com/static/images/logo_crystallize_black.svg'} />
      </AppBar>
      <Switch>
        <Route name={'home'} exact component={Ilustrations} />
        <Route name={'ilustration'} component={Ilustration} />
      </Switch>
    </AppContainer>
  )
};

export default Layout;