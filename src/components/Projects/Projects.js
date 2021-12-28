import React from "react";
import styled from "styled-components";
import wave from "../../assets/wave.svg";

const Projects = () => {
  const proj = ["Project 1", "Project 2", "Project 3"];
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
      {proj.map((item, i) => {
        return (
          <StyledProject key={i}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "50%" }}>
                <img src="http://source.unsplash.com/600x600" alt="" />
              </div>
              <div style={{ width: "50%", textAlign: "center" }}>
                <h2>{item}</h2>
              </div>
            </div>
            <img src={wave} alt="" />
          </StyledProject>
        );
      })}
      {/* <StyledProject wave={wave} />
      <StyledProject wave={wave} />
      <StyledProject wave={wave} /> */}
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
  position: relative;
  overflow: hidden;

  & > img {
    transform: rotate(-90deg);

    height: 212px;
    position: absolute;
    top: 148px;
    left: 240px;
  }
  /* position: absolute;
    top: 0;
    left: 0;
    z-index: 100; */
`;
