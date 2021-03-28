import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.6rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
    gap: 1.2rem;

    padding: 0 1%;
  }
`;

export const Languague = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;

  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0 0.4rem 0.4rem 0;
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.4rem;
  color: currentColor;

  transition: all 0.3s;

  &:hover,
  &:active,
  &.selected {
    width: 85%;
    background: ${({ theme, langColor }) =>
      langColor ? langColor : theme.colors.text};
    border-radius: 0 1.4rem 1.4rem 0;

    font-weight: 700;
    color: ${({ theme, langColor }) =>
      langColor ? theme.colors.text : theme.colors.primary};

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
      justify-self: center;
      border-radius: 0.4rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    height: 4rem;
    border-radius: 0.4rem;
  }
`;

export const Cleaner = styled.button`
  background: transparent;

  padding-left: 1.2rem;
  margin-top: 0.8rem;

  font-size: 1.4rem;
  color: currentColor;

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    height: 4rem;
    padding: 0;
    margin: 0;
  }
`;
