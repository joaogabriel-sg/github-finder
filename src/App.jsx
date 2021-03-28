import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { GithubUserProvider } from './contexts/GithubUser';

import GlobalStyle from './styles/global';
import { dark, light } from './styles/themes';

const App = () => (
  <ThemeProvider theme={light || dark}>
    <GithubUserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </GithubUserProvider>
  </ThemeProvider>
);

export default App;
