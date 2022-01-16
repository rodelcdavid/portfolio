import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <StyledLoading>
      <Spinner />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  animation: ${rotate} 0.5s infinite linear;
  width: 50px;
  height: 50px;
  border: 3px solid #e5e5e5;
  border-bottom: 3px solid #747fe0;
  border-radius: 50%;
  margin: 0;
`;

export default Loading;
