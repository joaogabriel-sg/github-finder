import React from 'react';

import Head from '../../helpers/Head';

import { Container, Loader } from './style';

const Loading = () => (
  <Container>
    <Head title="Loading..." />
    <Loader />
  </Container>
);

export default Loading;
