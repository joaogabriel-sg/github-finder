import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyle from './styles/global';
import { dark, light } from './styles/themes';

const App = () => (
  <ThemeProvider theme={dark || light}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
