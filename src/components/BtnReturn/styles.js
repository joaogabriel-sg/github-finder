import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ theme, isStyled }) =>
    isStyled
      ? theme.title === 'light'
        ? theme.colors.palette.green
        : theme.colors.palette.red
      : 'transparent'};
  width: 100%;
  max-width: ${({ isStyled }) => (isStyled ? '20rem' : '100%')};

  padding: ${({ isStyled }) => (isStyled ? '0.8rem 0' : '0')};
  border-radius: 0.8rem;
  margin-left: ${({ isStyled }) => (isStyled ? '0' : '1.2rem')};
  margin-top: ${({ isStyled }) => (isStyled ? '2.4rem' : '0')};

  display: flex;
  align-items: center;
  justify-content: ${({ isStyled }) => (isStyled ? 'center' : 'flex-start')};

  font-size: ${({ isStyled }) => (isStyled ? '2rem' : '1.6rem')};
  font-weight: 700;

  transition: all 0.3s;

  &:hover {
    background: ${({ theme, isStyled }) =>
      isStyled
        ? theme.title === 'light'
          ? theme.colors.palette.greenDark
          : theme.colors.palette.redDark
        : 'transparent'};
  }

  svg {
    margin-right: 0.8rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    width: ${({ isStyled }) => (isStyled ? '100%' : 'auto')};
  }
`;
