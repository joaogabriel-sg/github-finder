import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    padding: 0 1.2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  margin: 2rem 0;
`;

export const Avatar = styled.img`
  width: 100%;
  max-width: 14rem;
  object-fit: cover;
  align-self: center;

  border-radius: 50%;
  margin-bottom: 1.4rem;
`;

export const Login = styled.h2`
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`;

export const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1;
`;

export const Content = styled.section``;

export const Data = styled.p`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  word-break: break-all;

  & + p {
    margin-top: 0.4rem;
  }

  svg {
    margin-right: 0.8rem;
    flex-shrink: 0;
  }

  a {
    display: flex;
    align-items: center;
    word-break: break-all;
  }
`;
