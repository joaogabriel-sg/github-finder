import React, { useContext } from 'react';

import langColors from '../../../services/colorConfigs';

import { Container, Languague, Cleaner } from './styles';

import { GithubUserContext } from '../../../contexts/GithubUser';

const Filter = () => {
  const { reposData, activeLang, activeNewReposFilteredByLang } = useContext(
    GithubUserContext,
  );

  if (!reposData.length) return null;

  const countPerLanguage = reposData
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
          onClick={() => activeNewReposFilteredByLang(lang)}
          className={activeLang === lang ? 'selected' : ''}
        >
          <span>{lang}</span>
          <span>{count}</span>
        </Languague>
      ))}
      <Cleaner onClick={() => activeNewReposFilteredByLang(null)}>
        Clear
      </Cleaner>
    </Container>
  );
};

export default Filter;
