import React, { useState } from 'react';

import langColors from '../../../services/colorConfigs';

import { Container, Languague, Cleaner } from './styles';

const Filter = () => {
  const [activeLang, setActiveLang] = useState(null);

  const repositories = [
    { language: 'HTML' },
    { language: 'CSS' },
    { language: 'JavaScript' },
    { language: 'Python' },
    { language: 'JavaScript' },
    { language: 'Swift' },
    { language: null },
  ];

  if (!repositories.length) return null;

  const countPerLanguage = repositories
    .map(({ language }) => language)
    .reduce(
      (datas, language) => ({
        ...datas,
        [language]: (datas[language] || 0) + 1,
      }),
      {},
    );

  delete countPerLanguage.null;

  const languages = Object.keys(countPerLanguage).map((lang) => ({
    lang,
    count: countPerLanguage[lang],
    color: langColors[lang.toLowerCase()] || '',
  }));

  return (
    <Container>
      {languages.map(({ lang, count, color }) => (
        <Languague
          key={lang}
          langColor={color}
          onClick={() => setActiveLang(lang)}
          className={activeLang === lang ? 'selected' : ''}
        >
          <span>{lang}</span>
          <span>{count}</span>
        </Languague>
      ))}
      <Cleaner onClick={() => setActiveLang(null)}>Limpar</Cleaner>
    </Container>
  );
};

export default Filter;
