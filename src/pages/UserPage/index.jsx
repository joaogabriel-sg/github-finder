import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Head from '../../helpers/Head';
import BtnReturn from '../../components/BtnReturn';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import Loading from '../../components/Loading';
import SwitchThemeMode from '../../components/SwitchThemeMode';

import { Container, Sidebar, Main } from './styles';

import { GithubUserContext } from '../../contexts/GithubUser';

const UserPage = () => {
  const { loading, error, getGithubUser } = useContext(GithubUserContext);
  const history = useHistory();
  const { username } = useParams();

  useEffect(() => {
    getGithubUser(username);
  }, []);

  if (loading) return <Loading />;

  if (error) {
    history.push('/');
    return null;
  }

  return (
    <Container>
      <Head
        title={username}
        description={`${username} user page on GitHub Finder.`}
      />
      <Sidebar>
        <BtnReturn text="Back" />
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
      <SwitchThemeMode />
    </Container>
  );
};

export default UserPage;
