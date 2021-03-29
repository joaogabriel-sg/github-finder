import styled from 'styled-components';
import { ReactComponent as GitHub } from '../../assets/github-logo.svg';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 1%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0.8rem 0 2.4rem;
  font-size: 3rem;
  text-align: center;
`;

export const GitHubLogo = styled(GitHub)`
  & > * {
    transition: all 0.3s;
    fill: ${({ theme }) => theme.colors.text};
  }
`;
