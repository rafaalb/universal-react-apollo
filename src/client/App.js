import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

// A Routes file is a good shared entry-point between client and server
import routes from './../routes';

// Our single Styled Component definition
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;


const Layout = () =>
  <AppContainer>
    <Switch>
      {routes.map(route => <Route key={route.name} {...route} />)}
    </Switch>
  </AppContainer>;

export default Layout;