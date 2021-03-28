import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import BtnReturn from '../../components/BtnReturn';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { GithubUserContext } from '../../contexts/GithubUser';

const UserPage = () => {
  const { loading, error, getGithubUser } = useContext(GithubUserContext);
  const history = useHistory();
  const { username } = useParams();

  useEffect(() => {
    getGithubUser(username);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    history.go(-1);
    return null;
  }

  return (
    <Container>
      <Sidebar>
        <BtnReturn text="Voltar" />
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default UserPage;
