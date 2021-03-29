import React from 'react';

import Head from '../../helpers/Head';
import BtnReturn from '../../components/BtnReturn';
import SwitchThemeMode from '../../components/SwitchThemeMode';

import { Container, NotFound } from './styles';

const NotFoundPage = () => (
  <Container>
    <Head title="Not found" />
    <NotFound>Essa página não existe...</NotFound>
    <BtnReturn text="Voltar ao início" isStyled />
    <SwitchThemeMode />
  </Container>
);

export default NotFoundPage;
