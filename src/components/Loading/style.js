import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  50% {
    transform: scale(0.65);
    box-shadow: none;
  }
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0.6rem 0.5rem rgba(0, 0, 0, 0.25),
      0 0 0 2rem ${({ theme }) => theme.colors.palette.red},
      0 0 0.6rem 2rem rgba(0, 0, 0, 0.25),
      0 0 0 4rem ${({ theme }) => theme.colors.palette.red},
      0 0 0.6rem 4rem rgba(0, 0, 0, 0.25);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  background: ${({ theme }) => theme.colors.palette.red};
  width: 8rem;
  height: 8rem;

  border-radius: 50%;

  box-shadow: 0 0 0.6rem 0.5rem rgba(0, 0, 0, 0.25),
    0 0 0 2rem ${({ theme }) => theme.colors.palette.red},
    0 0 0.6rem 2rem rgba(0, 0, 0, 0.25),
    0 0 0 4rem ${({ theme }) => theme.colors.palette.red},
    0 0 0.6rem 4rem rgba(0, 0, 0, 0.25);

  animation: ${loaderAnimation} 1.25s infinite linear;
`;
