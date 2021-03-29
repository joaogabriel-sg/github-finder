import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 40rem;
  height: 4.2rem;

  display: grid;
  grid-template-columns: 1fr 4.8rem;
  column-gap: 2.4rem;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;

  padding: 0 1.6rem;
  border: none;
  border-radius: 0.4rem;
  margin-right: 2.4rem;

  font-size: 1.6rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};

  transition: all 0.3s;
`;

export const Button = styled.button`
  background: transparent;
  width: 100%;

  border: 0.2rem solid ${({ theme }) => theme.colors.text};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.text};

  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
