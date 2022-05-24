import React from "react";
import styled from "styled-components";
import formal from "../assets/formal.png";

import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaGithub, FaMobileAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <StyledProfile>
      <div>
        <img src={formal} alt="" />
        <h1>Rodel David</h1>
        <p>Fullstack Developer</p>
      </div>
      <hr />
      <div>
        <div>
          <a href="mailto:rodelcdavid@gmail.com">
            <MdEmail size="1.5rem" />
            <p>rodelcdavid@gmail.com</p>
          </a>
          <a
            href="https://github.com/rodelcdavid"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="1.5rem" />
            <p>@rodelcdavid</p>
          </a>
          <a
            href="https://goo.gl/maps/Lwzt5RiNP1DJGZQY7"
            target="_blank"
            rel="noreferrer"
          >
            <MdLocationPin size="1.5rem" />
            <p>Tarlac, PH</p>
          </a>
          <a href="tel:+639605756787" target="_blank" rel="noreferrer">
            <FaMobileAlt size="1.5rem" />
            <p>+63 960 575 6787</p>
          </a>
        </div>
      </div>
      {/* <p>Made by Rodel David c 2022</p> */}
    </StyledProfile>
  );
};

const StyledProfile = styled.section`
  align-items: center;
  background: url("https://images.unsplash.com/photo-1512250591270-0bea37004c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80")
    center center;
  background: url("https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")
    center center;

  background-size: cover;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: 550px;
  padding: 1rem 0.5rem;
  position: relative;
  z-index: 0;

  hr {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 1.5rem 0;
    width: 100%;
  }

  /* Overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  & > div:first-child {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;

    & > img {
      border: solid 4px ${({ theme }) => theme.colors.primary};
      border-radius: 100%;
      box-shadow: ${({ theme }) => theme.shadows[0]};
      width: 180px;
    }

    & > h1 {
      margin-top: 1rem;
      letter-spacing: 3px;
    }
  }

  & > div:last-child {
    /* border: 1px solid magenta; */
    /* height: 100%; */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    div {
      a {
        align-items: center;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        gap: 30px;
        justify-content: flex-start;
        padding: 0.5rem;
        transition: all ease-in 150ms;

        &:hover {
          color: ${({ theme }) => theme.colors.accentLight};
          transform: scale(1.03);
        }
      }
    }
  }

  /* Media Queries */
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    box-shadow: ${({ theme }) => theme.shadows[1]};
    height: 100vh;
    min-height: initial;
    position: fixed;
    width: 30%;
    z-index: 1;

    &::after {
      z-index: -1;
    }
  }

  @media (max-height: 480px) and (min-width: 1020px) {
    hr,
    & > div:last-child p {
      display: none;
    }

    & > div:last-child div {
      display: flex;
      flex-direction: row;
      margin-top: 0.5rem;
    }
  }
`;

export default Profile;
