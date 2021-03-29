import React, { useContext, useEffect, useState } from 'react';

import SearchForm from './SearchForm';
import ErrorToastNotification from '../../components/ErrorToastNotification';
import SwitchThemeMode from '../../components/SwitchThemeMode';

import { Container, Title, GitHubLogo } from './styles';

import { GithubUserContext } from '../../contexts/GithubUser';

const SearchPage = () => {
  const { error } = useContext(GithubUserContext);
  const [errorVisibility, setErrorVisibility] = useState(false);

  useEffect(() => {
    if (error) {
      let errTimeout = null;
      setErrorVisibility(true);

      errTimeout = setTimeout(() => {
        setErrorVisibility(false);
        clearTimeout(errTimeout);
      }, 5000);
    }
  }, [error]);

  return (
    <Container>
      <GitHubLogo />
      <Title>GitHub Finder</Title>
      <SearchForm />
      <SwitchThemeMode />
      {error && (
        <ErrorToastNotification
          isVisible={errorVisibility}
          message="Invalid Username"
        />
      )}
    </Container>
  );
};

export default SearchPage;
