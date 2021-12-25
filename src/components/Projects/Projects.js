import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 8rem",
        backgroundColor: "#D3E0EA",
      }}
      id="projects"
    >
      <h2 style={{ color: "#276678", textAlign: "center" }}>Projects</h2>
      <StyledProject />
      <StyledProject />
      <StyledProject />
    </div>
  );
};

export default Projects;

const StyledProject = styled.div`
  width: calc(100%-8rem);
  height: 30rem;
  margin-top: 1.5rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.23);
  border-radius: 40px;
`;
