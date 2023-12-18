// components/About.jsx
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>About G Plaza</h2>
      <p>
        Welcome to G Plaza, your ultimate destination for all things Gundam.
      </p>
      <p>
        Explore our extensive collection of Gundam series, models, and history.
      </p>
      <p>. David</p>
    </AboutContainer>
  );
};

export default About;
