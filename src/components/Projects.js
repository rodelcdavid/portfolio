import React from "react";
import styled from "styled-components";
import wave from "../assets/wave.svg";

const Projects = () => {
  // const projects = ["Project 1", "Project 2", "Project 3"];
  const projects = [
    {
      name: "Picmodoro",
      tags: ["html", "css", "javascript", "html", "css", "javascript"],
    },
    { name: "30-Day Boredom Challenge", tags: ["html", "css", "javascript"] },
    {
      name: "PH Medical Specialist Finder",
      tags: ["html", "css", "javascript"],
    },
  ];
  return (
    <StyledProjects>
      <h2>Projects</h2>
      {projects.map((item, i) => {
        return (
          <ProjectContainer>
            <img src="http://source.unsplash.com/random/400x600" alt="" />
            <div>
              <h2>{item.name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  flexWrap: "wrap",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                {item.tags.map((tag) => {
                  return (
                    <span
                      style={{
                        // display: "flex",
                        padding: "0.5rem",
                        border: "2px solid lightgreen",
                        borderRadius: "5px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                <button>Live Demo</button>
                <button>View Source</button>
              </div>
            </div>
          </ProjectContainer>
        );
      })}
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  /* height: 1000px; */
  position: relative;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    padding: 1rem 0 1rem 30%;
    width: 100%;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  /* border: 1px solid #000; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.23);
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: #fff;

  img {
    width: 100%;
    height: 50%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50%;
    padding: 0.5rem;
    text-align: left;
    z-index: 2;
    h2 {
      /* text-align: center; */
    }
  }

  &::after {
    content: url(${wave});
    width: 100%;

    position: absolute;
    top: 140px;
    left: 0;
    z-index: 1;
  }

  @media (min-width: 900px) {
    width: 600px;
    height: 300px;
    flex-direction: row;
    img {
      width: 50%;
      height: 100%;
    }

    & > div {
      width: 50%;
      height: 100%;
      h2 {
        /* text-align: center; */
      }
    }

    &::after {
      content: url(${wave});
      width: 320px;
      transform: rotate(-90deg);
      position: absolute;
      top: 80px;
      left: 120px;
    }
  }
`;
export default Projects;
