import React from "react";
import styled from "styled-components";
import formal from "../assets/formal.png";
import NavDetails from "./NavDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const Details = () => {
  return (
    <BrowserRouter>
      <StyledDetails>
        <div>
          <img src={formal} alt="" />
          <h1>Rodel David</h1>
          <p>Fullstack Developer</p>
        </div>
        <hr />
        <div>
          <NavDetails />
          <Routes>
            <Route path="/" exact element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <p>Made by Rodel David c 2022</p> */}
      </StyledDetails>
    </BrowserRouter>
  );
};

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  height: 100vh;
  position: relative;
  padding: 1rem 0.5rem;
  color: #fff;

  hr {
    width: 100%;
    border: 5px dotted #fff;
    border-top: none;
    margin-top: 1rem;
  }

  img {
    width: 180px;
    border-radius: 100%;
    border: solid 5px #fff;
    box-shadow: 0 0 10px #000;
  }

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div:last-child {
    border: 1px solid magenta;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 900px) {
    width: 30%;
    z-index: 1;
    position: fixed;

    &::after {
      z-index: -1;
    }
  }
`;

export default Details;
