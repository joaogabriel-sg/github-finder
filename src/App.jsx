import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

import Contexts from './contexts';

const App = () => (
  <Contexts>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Contexts>
);
export default App;
