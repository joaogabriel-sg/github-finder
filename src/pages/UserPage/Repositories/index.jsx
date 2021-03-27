import React from 'react';
import Repository from '../Repository';

import { Title, RepositoriesContainer } from './styles';

const Repositories = () => {
  const repositories = [
    {
      id: 314244944,
      name: 'animais-fantasticos',
      html_url: 'https://github.com/joaogabriel-sg/animais-fantasticos',
      language: 'JavaScript',
      description:
        "Animais Fantásticos is the project developed in the Origamid's ES6 Complete JavaScript course.",
    },
    {
      id: 316562020,
      name: 'bitnalyze',
      html_url: 'https://github.com/joaogabriel-sg/bitnalyze',
      language: 'JavaScript',
      description:
        'Bitnalyze is a study project created for Bitcoin analysis, presenting a graph of currency variation, timed update, bitcoin / real comparison and others.',
    },
    {
      id: 320643477,
      name: 'calckcal',
      html_url: 'https://github.com/joaogabriel-sg/calckcal',
      language: 'JavaScript',
      description:
        'CalcKcal is an application that helps you to know how many calories you need to consume per day to perform the maintenance of your body.',
    },
    {
      id: 334956559,
      name: 'dev-cloud',
      html_url: 'https://github.com/joaogabriel-sg/dev-cloud',
      language: 'SCSS',
      description:
        'Dev Cloud is a personal study site for a fictional cloud platform, which I was able to do from design to coding.',
    },
    {
      id: 324645475,
      name: 'rastreia-ip',
      html_url: 'https://github.com/joaogabriel-sg/rastreia-ip',
      language: 'CSS',
      description:
        'Rastreia IP is an application in which I have the ability to find the IP location I want.',
    },
  ];

  return (
    <>
      <Title>Repositories</Title>
      {!repositories.length ? null : (
        <RepositoriesContainer>
          {repositories.map((repository) => (
            <Repository key={repository.id} repository={repository} />
          ))}
        </RepositoriesContainer>
      )}
    </>
  );
};

export default Repositories;
