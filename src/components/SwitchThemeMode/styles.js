import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  background: ${({ theme, activeThemeMode }) =>
    activeThemeMode === 'light'
      ? theme.colors.palette.asphalt
      : theme.colors.palette.orange};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  svg {
    color: ${({ theme }) => theme.colors.palette.cloud};
  }
`;
