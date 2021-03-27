import React from 'react';

import BtnReturn from '../../components/BtnReturn';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const UserPage = () => (
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

export default UserPage;
