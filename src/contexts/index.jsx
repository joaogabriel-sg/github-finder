import React from 'react';
import PropTypes from 'prop-types';

import { GithubUserProvider } from './GithubUser';
import { ThemeModeProvider } from './ThemeMode';

const Contexts = ({ children }) => (
  <ThemeModeProvider>
    <GithubUserProvider>{children}</GithubUserProvider>
  </ThemeModeProvider>
);

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;
