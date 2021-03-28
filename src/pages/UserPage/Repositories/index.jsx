import React, { useContext } from 'react';
import Repository from '../Repository';

import { Title, RepositoriesContainer } from './styles';

import { GithubUserContext } from '../../../contexts/GithubUser';

const Repositories = () => {
  const { reposData } = useContext(GithubUserContext);

  return (
    <>
      <Title>Repositories</Title>
      {!reposData.length ? null : (
        <RepositoriesContainer>
          {reposData.map((repository) => (
            <Repository key={repository.id} repository={repository} />
          ))}
        </RepositoriesContainer>
      )}
    </>
  );
};

export default Repositories;
