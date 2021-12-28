import React from "react";
import styled, { keyframes } from "styled-components";
import formal from "../../assets/formal.png";

const About = () => {
  return (
    <>
      <StyledAbout id="about">
        <Description>
          <div>
            <img src={formal} alt="" />
          </div>
          <div>
            <h1>
              {`> Rodel David`}
              <span>&nbsp;&nbsp;</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Description>

        <Technologies>
          <h3>Technologies I've Worked With</h3>
          <div>
            <img src="http://source.unsplash.com/random/200x200" alt="" />
            <img src="http://source.unsplash.com/random/200x201" alt="" />
            <img src="http://source.unsplash.com/random/200x202" alt="" />
            <img src="http://source.unsplash.com/random/200x203" alt="" />
            <img src="http://source.unsplash.com/random/200x203" alt="" />
            <img src="http://source.unsplash.com/random/200x204" alt="" />
            <img src="http://source.unsplash.com/random/200x205" alt="" />
            <img src="http://source.unsplash.com/random/200x206" alt="" />
            <img src="http://source.unsplash.com/random/200x207" alt="" />
            <img src="http://source.unsplash.com/random/200x208" alt="" />
          </div>
        </Technologies>
      </StyledAbout>
    </>
  );
};

const blinkingText = keyframes`

    0% {
      background-color: #1687A7;
    }
    49% {
      background-color: #1687A7;
    }
    60% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
    100% {
      background-color: #1687A7;
    }
  
`;

const StyledAbout = styled.div`
  padding: 3rem 8rem;
  background-color: #f6f5f5;
`;
const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    /* border: 1px solid rgba(0, 0, 0, 0.23); */
    border-radius: 20px;

    img {
      width: 70%;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    h1 {
      font-size: 3rem;
      color: #1687a7;

      span {
        background-color: #1687a7;
        animation: ${blinkingText} 1.2s infinite;
      }
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const Technologies = styled.div`
  margin-top: 2rem;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    color: #276678;
  }

  div {
    display: flex;
    width: 500px;
    margin: 1rem auto;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 80px;
    }
  }
`;

export default About;
