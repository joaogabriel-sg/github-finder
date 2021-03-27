import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 28rem 1fr;
`;

export const Sidebar = styled.aside`
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
`;

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.secondary};
`;
