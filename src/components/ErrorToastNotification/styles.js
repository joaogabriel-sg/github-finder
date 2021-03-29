import styled, { keyframes } from 'styled-components';

const showToastErrorAnimation = keyframes`
  from {
    min-width: 0;
    padding: 0;
  }
  to {
    min-width: 15rem;
    padding: 0 1.2rem;
  }
`;

const hideToastErrorAnimation = keyframes`
  from {
    min-width: 15rem;
    padding: 0 1.2rem;
  }
  to {
    min-width: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 5rem;
  right: 0;

  background: ${({ theme }) => theme.colors.palette.red};
  min-width: 0;
  height: 3.2rem;

  padding: 0;
  border-radius: 0.4rem 0 0 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${({ isVisible }) =>
      isVisible ? showToastErrorAnimation : hideToastErrorAnimation}
    0.6s forwards;
`;

const showMessageAnimation = keyframes`
  from {
    opacity: 0;
    max-width: 0;
  }
  50% {
    opacity: 0;
    visibility: visible;
    max-width: 100%;
  }
  to {
    opacity: 1;
    visibility: visible;
    max-width: 100%;
  }
`;

export const Message = styled.h3`
  font-size: 1.4rem;

  max-width: 0;
  opacity: 0;
  visibility: hidden;

  animation: ${({ isVisible }) => isVisible && showMessageAnimation} 0.3s
    forwards 0.6s;
`;
