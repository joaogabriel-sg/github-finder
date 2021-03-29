import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { dark, light } from '../styles/themes';

export const ThemeModeContext = createContext({});

export const ThemeModeProvider = ({ children }) => {
  const [activeThemeMode, setActiveThemeMode] = useState('light');

  function changeThemeMode() {
    setActiveThemeMode((oldActiveThemeMode) =>
      oldActiveThemeMode === 'light' ? 'dark' : 'light',
    );
  }

  useEffect(() => {
    const localActiveThemeMode =
      localStorage.getItem('@github-finder/ACTIVE_THEME_MODE') || 'light';

    setActiveThemeMode(localActiveThemeMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('@github-finder/ACTIVE_THEME_MODE', activeThemeMode);
  }, [activeThemeMode]);

  return (
    <ThemeProvider theme={activeThemeMode === light.title ? light : dark}>
      <ThemeModeContext.Provider value={{ activeThemeMode, changeThemeMode }}>
        {children}
      </ThemeModeContext.Provider>
    </ThemeProvider>
  );
};

ThemeModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
