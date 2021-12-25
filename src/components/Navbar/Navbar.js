import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  padding: 1rem 8rem;
  background-color: #f6f5f5;
  border-bottom: 1px solid #276678;
  /* width: 100%; */
  a {
    font-size: 1.3rem;
    display: inline-block;
    width: 80px;
    padding: 5px;
    cursor: pointer;
    text-align: center;

    &:hover {
      transform: scale(1.03);
      color: #276678;
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      color: red;
      background-color: #276678;
      border-radius: 80px;
      margin-top: 2px;
      transform: scaleX(0);
      transition: transform 250ms ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export default Navbar;
