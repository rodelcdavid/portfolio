import React from "react";
import styled from "styled-components";
import { ContainerWhite } from "../../utils/GlobalStyles";

const Navbar = () => {
  return (
    <BorderedContainerWhite>
      <StyledNavbar>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </StyledNavbar>
    </BorderedContainerWhite>
  );
};

const BorderedContainerWhite = styled(ContainerWhite)`
  border-bottom: 1px solid #276678;
`;

const StyledNavbar = styled.div`
  /* position: fixed; */

  display: flex;
  gap: 10px;
  justify-content: space-around;

  @media (min-width: 760px) {
    justify-content: flex-end;
  }

  /* width: 100%; */
  a {
    font-size: 1.2rem;
    padding: 1rem;
    font-weight: bold;
    position: relative;

    &:hover {
      transform: scale(1.01);
      color: #276678;
    }
    &::after {
      content: "";
      position: absolute;
      top: 45px;
      left: 0;
      width: 100%;
      margin: 0 auto;
      height: 4px;
      color: red;
      background-color: #1687a7;
      border-radius: 80px;
      transform: scaleX(0);
      transition: transform 250ms ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export default Navbar;
