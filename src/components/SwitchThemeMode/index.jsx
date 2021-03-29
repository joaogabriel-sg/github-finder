import React, { useContext } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

import { Container } from './styles';

import { ThemeModeContext } from '../../contexts/ThemeMode';

const SwitchThemeMode = () => {
  const { activeThemeMode, changeThemeMode } = useContext(ThemeModeContext);

  return (
    <Container
      onClick={() => changeThemeMode()}
      activeThemeMode={activeThemeMode}
    >
      {activeThemeMode === 'light' ? (
        <IoMoon size={24} />
      ) : (
        <IoSunny size={24} />
      )}
    </Container>
  );
};

export default SwitchThemeMode;
