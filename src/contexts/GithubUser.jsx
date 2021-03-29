import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

export const GithubUserContext = createContext({});

export const GithubUserProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [reposData, setReposData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeLang, setActiveLang] = useState(null);

  function activeNewReposFilteredByLang(lang) {
    setActiveLang(lang);
  }

  async function getGithubUser(username) {
    try {
      setActiveLang(null);
      setLoading(true);
      setError(false);

      const { data: user } = await api.get(username);
      const { data: repos } = await api.get(`${username}/repos`);

      setProfileData(user);
      setReposData(repos);
    } catch (err) {
      setError(true);
      setProfileData(null);
      setReposData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <GithubUserContext.Provider
      value={{
        profileData,
        reposData,
        activeLang,
        loading,
        error,
        getGithubUser,
        activeNewReposFilteredByLang,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};

GithubUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
