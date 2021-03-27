import React from 'react';

import SearchForm from './SearchForm';

import { Container, Title, GitHubLogo } from './styles';

const SearchPage = () => (
  <Container>
    <GitHubLogo />
    <Title>GitHub Finder</Title>
    <SearchForm />
  </Container>
);

export default SearchPage;
