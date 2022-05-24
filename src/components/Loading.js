import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = ({ displaySpinner }) => {
  return (
    <StyledLoading>
      <Spinner displaySpinner={displaySpinner} />
    </StyledLoading>
  );
};

const fadeOut = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  animation: ${fadeOut} 1s;
  animation-delay: 2s;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
`;

const Spinner = styled.div`
  animation: ${rotate} 0.5s infinite linear;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  display: ${({ displaySpinner }) => (displaySpinner ? "block" : "none")};
  height: 50px;
  margin: 0;
  width: 50px;
`;

export default Loading;
