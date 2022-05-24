import React from "react";
import styled from "styled-components";
import wave from "../assets/wave.svg";
import projectList from "../projectList";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import previewBg from "../assets/preview-background.jpg";

const Projects = () => {
  return (
    <StyledProjects>
      <h1>Projects</h1>
      {projectList.map((item, i) => {
        return (
          <ProjectCard key={i} previewBg={previewBg} projectType={item.type}>
            <div>
              <img src={item.imgPreview} alt="" />
            </div>
            <div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div>
                {item.tags.map((tag, i) => {
                  return <span key={i}>{tag}</span>;
                })}
              </div>
              <div>
                <a onClick={() => window.open(item.demoUrl, "_blank")}>
                  <FaExternalLinkAlt /> Live Demo
                </a>

                <a onClick={() => window.open(item.sourceUrl, "_blank")}>
                  <FaGithub /> View Source
                </a>
              </div>
            </div>
          </ProjectCard>
        );
      })}
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding: 1rem 0.5rem;
  position: relative;

  & > h1 {
    color: ${({ theme }) => theme.colors.textBlack};
    padding: 0 1.5rem;
    border-bottom: 5px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
    letter-spacing: 3px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: 1rem 0 1rem 30%;
    width: 100%;
  }
`;

const ProjectCard = styled.div`
  box-shadow: ${({ theme }) => theme.shadows[0]};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 680px;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
  width: 300px;

  & > div:first-child {
    height: 40%;
    width: 100%;
    background: url(${({ previewBg }) => previewBg});
    background-position: center;
    background-size: cover;
    position: relative;

    img {
      width: 85%;
      position: relative;
      /* top: 20px; */
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: ${({ theme }) => theme.shadows[0]};
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: center;
    padding: 0.5rem 1rem;
    text-align: left;
    width: 100%;
    z-index: 2;

    h2 {
      font-family: ${({ theme }) => theme.fonts.body};
      color: ${({ theme }) => theme.colors.textBlack};
    }

    p {
      margin-top: 1rem;
    }

    div:nth-child(3) {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 10px;

      span {
        padding: 0.5rem;
        border: 2px solid ${({ theme }) => theme.colors.accentGreen};
        border-radius: 5px;
        font-size: 0.8rem;
      }
    }

    div:last-child {
      display: flex;
      gap: 10px;
      margin-top: 1rem;

      a {
        background-color: ${({ theme }) => theme.colors.accent};
        border: none;
        border-radius: 3px;
        box-shadow: ${({ theme }) => theme.shadows[0]};
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        font-size: 0.8rem;
        padding: 0.5rem;
        transition: all ease-in 150ms;

        svg {
          margin-right: 5px;
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.accentLight};
          transform: translateY(-1px);
        }
      }
    }
  }

  &::after {
    content: url(${wave});
    left: 0;
    position: absolute;
    top: 200px;
    transform: scaleY(0.4);
    width: 100%;
    z-index: 1;
  }

  &::before {
    content: "${({ projectType }) => projectType}";
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.7rem;
    padding: 0.5rem 1.5rem;
    /* border-radius: 20px; */
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    top: 20px;
    left: -30px;
    z-index: 2;
    transform: rotate(-45deg);
  }

  /* Media Queries */

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: row;
    height: 370px;
    width: 700px;

    & > div:first-child {
      height: 100%;
      width: 50%;

      img {
        top: 50%;
        transform: translateY(-50%);
        left: 8px;
      }
    }

    & > div:last-child {
      height: 100%;
      width: 50%;

      h2 {
        /* text-align: center; */
      }
    }

    &::after {
      left: 140px;
      top: 100px;
      transform: scaleX(0.7) rotate(-90deg);
      width: 380px;
    }
  }
`;
export default Projects;
