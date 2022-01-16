import React from "react";
import styled from "styled-components";
import wave from "../assets/wave.svg";
import test from "../assets/test.jpg";
import projectList from "../projectList";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import theme from "../utils/theme";

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Projects</h2>
      {projectList.map((item, i) => {
        return (
          <ProjectCard key={i}>
            {/* <img src="http://source.unsplash.com/random/400x600" alt="" /> */}
            <img src={test} alt="" />
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
                {item.tags.map((tag, i) => {
                  return (
                    <span
                      key={i}
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
                <button onClick={() => window.open(item.demoUrl, "_blank")}>
                  <FaExternalLinkAlt style={{ marginRight: "5px" }} /> Live Demo
                </button>

                <button onClick={() => window.open(item.sourceUrl, "_blank")}>
                  <FaGithub style={{ marginRight: "5px" }} /> View Source
                </button>
              </div>
            </div>
          </ProjectCard>
        );
      })}
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  /* height: 1000px; */
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding: 1rem 0.5rem;
  position: relative;

  h2 {
    /* color: #000; */
    color: ${({ theme }) => theme.colors.textDark};
  }
  & > h2 {
    padding: 0 1.5rem;
    border-bottom: 5px solid #747fe0;
    border-radius: 5px;
    letter-spacing: 3px;
  }
  @media (min-width: 930px) {
    padding: 1rem 0 1rem 30%;
    width: 100%;
  }
`;

const ProjectCard = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.23);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 600px;
  /* border: 1px solid #000; */
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
  width: 350px;

  img {
    height: 50%;
    width: 100%;
  }

  button {
    background-color: #747fe0;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.23);
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;
    transition: all ease-in 150ms;

    &:hover {
      /* transform: scale(1.01); */
      background-color: #7795f8;
      transform: translateY(-1px);
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    padding: 0.5rem;
    text-align: left;
    width: 100%;
    z-index: 2;
    h2 {
      /* text-align: center; */
      font-family: "Ubuntu";
    }

    p {
      margin-top: 1rem;
    }
  }

  &::after {
    content: url(${wave});
    left: 0;
    position: absolute;
    top: 215px;
    transform: scaleY(0.4);
    width: 100%;
    z-index: 1;
  }

  /* Media Queries */
  //1000px, min width 300px profile
  @media (min-width: 650px) {
    flex-direction: row;
    height: 300px;
    width: 600px;
    img {
      height: 100%;
      width: 50%;
    }

    & > div {
      height: 100%;
      width: 50%;

      h2 {
        /* text-align: center; */
      }
    }

    &::after {
      content: url(${wave});
      left: 120px;
      position: absolute;
      top: 80px;
      transform: rotate(-90deg);
      width: 320px;
    }
  }
`;
export default Projects;
