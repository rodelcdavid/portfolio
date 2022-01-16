import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <br />
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.{" "}
      </p>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  padding: 1rem;
`;
export default About;
