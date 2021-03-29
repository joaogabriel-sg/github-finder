import React from 'react';
import SwitchThemeMode from '../../components/SwitchThemeMode';

import SearchForm from './SearchForm';

import { Container, Title, GitHubLogo } from './styles';

const SearchPage = () => (
  <Container>
    <GitHubLogo />
    <Title>GitHub Finder</Title>
    <SearchForm />
    <SwitchThemeMode />
  </Container>
);

export default SearchPage;
