import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

export const GithubUserContext = createContext({});

export const GithubUserProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [reposData, setReposData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getGithubUser(username) {
    try {
      setLoading(true);
      setError(null);

      const { data: user } = await api.get(username);
      const { data: repos } = await api.get(`${username}/repos`);

      setProfileData(user);
      setReposData(repos);
    } catch (err) {
      setError(err);
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
