import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 2.8rem;

  font-size: 2.8rem;
  line-height: 1;
`;

export const RepositoriesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;
