import React from 'react';
import PropTypes from 'prop-types';

import langColors from '../../../services/colorConfigs';

import {
  Container,
  Name,
  Description,
  Footer,
  Language,
  SeeMore,
} from './styles';

const Repository = ({ repository }) => {
  const langColor =
    repository.language && langColors[repository.language.toLowerCase()];

  return (
    <Container langColor={langColor}>
      <Name>{repository.name}</Name>
      {repository.description && (
        <Description>{repository.description}</Description>
      )}
      <Footer>
        <Language>{repository.language || ''}</Language>
        <SeeMore
          href={repository.html_url}
          target="_blank"
          langColor={langColor}
        >
          See More
        </SeeMore>
      </Footer>
    </Container>
  );
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Repository;
