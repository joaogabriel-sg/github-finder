import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Name,
  Description,
  Footer,
  Language,
  SeeMore,
} from './styles';

const Repository = ({ repository }) => (
  <Container>
    <Name>{repository.name}</Name>
    {repository.description && (
      <Description>{repository.description}</Description>
    )}
    <Footer>
      <Language>{repository.language}</Language>
      <SeeMore href={repository.html_url} target="_blank">
        See More
      </SeeMore>
    </Footer>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repository;