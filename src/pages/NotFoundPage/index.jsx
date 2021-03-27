import React from 'react';

import BtnReturn from '../../components/BtnReturn';

import { Container, NotFound } from './styles';

const NotFoundPage = () => (
  <Container>
    <NotFound>Essa página não existe...</NotFound>
    <BtnReturn text="Voltar ao início" isStyled />
  </Container>
);

export default NotFoundPage;
