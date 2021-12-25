import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Made by Rodel David c 2021</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 2rem 8rem;
  background-color: #f6f5f5;
  p {
    text-align: center;
  }
`;
export default Footer;
