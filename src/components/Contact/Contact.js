import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h2>Contact</h2>
      <div>
        <p>Feel free to message me at: </p>
        <a href="mailto:rodelcdavid@gmail.com">rodelcdavid@gmail.com</a>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  padding: 2rem 8rem;
  background-color: #f6f5f5;
  h2 {
    text-align: center;
    color: #276678;
  }

  div {
    width: 500px;
    height: 200px;
    border: 1px solid #276678;
    border-radius: 30px;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;

    a {
      font-weight: bolder;
    }
  }
`;
export default Contact;
