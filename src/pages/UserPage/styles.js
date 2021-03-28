import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 28rem 1fr;

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  overflow-y: auto;

  padding: 2rem 1.6rem 2rem 0;

  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.colors.primary};
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    height: auto;
    overflow-y: visible;

    padding: 2rem 0;
  }
`;

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  overflow-y: auto;
  padding: 2rem 4rem;

  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.colors.secondary};
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    height: auto;
    overflow-y: visible;

    padding: 2rem 1.2rem;
  }
`;
