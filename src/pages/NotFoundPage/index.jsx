import React from 'react';

import Head from '../../helpers/Head';
import BtnReturn from '../../components/BtnReturn';
import SwitchThemeMode from '../../components/SwitchThemeMode';

import { Container, NotFound } from './styles';

const NotFoundPage = () => (
  <Container>
    <Head title="Not found" />
    <NotFound>This page was not found...</NotFound>
    <BtnReturn text="Back to start" isStyled />
    <SwitchThemeMode />
  </Container>
);

export default NotFoundPage;
