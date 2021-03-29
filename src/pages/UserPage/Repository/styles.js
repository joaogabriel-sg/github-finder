import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;
  border-left: 0.4rem solid
    ${({ theme, langColor }) => langColor || theme.colors.text};
  border-radius: 0.4rem;

  transition: all 0.3s;
`;

export const Name = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1;
`;

export const Description = styled.p`
  margin-top: 1.2rem;

  font-size: 1.4rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
`;

export const Language = styled.span`
  flex: 1;
`;

export const SeeMore = styled.a`
  background: ${({ theme }) => theme.colors.secondary};

  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;

  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme, langColor }) =>
      langColor ? langColor : theme.colors.text};
    color: ${({ theme, langColor }) =>
      langColor ? theme.colors.text : theme.colors.primary};
  }
`;
