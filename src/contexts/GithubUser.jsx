import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

export const GithubUserContext = createContext({});

export const GithubUserProvider = ({ children }) => {
  const [githubUserProfileData, setGithubUserProfileData] = useState({});
  const [githubUserReposData, setGithubUserReposData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getGithubUser(username) {
    try {
      setLoading(true);
      setError(null);

      const { data: userData } = await api.get(username);
      const { data: reposData } = await api.get(`${username}/repos`);

      setGithubUserProfileData(userData);
      setGithubUserReposData(reposData);
    } catch (err) {
      setError(err);
      setGithubUserProfileData(null);
      setGithubUserReposData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <GithubUserContext.Provider
      value={{
        githubUserProfileData,
        githubUserReposData,
        loading,
        error,
        getGithubUser,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};

GithubUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
