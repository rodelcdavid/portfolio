import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavDetails = () => {
  return (
    <StyledNavDetails>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/skills">Skills</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </StyledNavDetails>
  );
};

const StyledNavDetails = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 5%; */
  padding: 0 1rem;
`;

const StyledLink = styled(NavLink)`
  &.active {
    color: #276678;
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
      transform: scaleX(1);
      transition: transform 250ms ease;
    }
  }

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
`;

export default NavDetails;
