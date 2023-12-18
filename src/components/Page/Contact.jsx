// components/Contact.jsx
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p,
  a {
    margin-bottom: 5px;
    display: block;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <p>Have questions? I'd love to hear from you!</p>
      <p>Email at: dltjrgml127@naver.com</p>
      <a
        href="https://www.instagram.com/xuccee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram @xuccee
      </a>
      <a
        href="https://github.com/DavidLeeeee"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github @DavidLeeeee
      </a>
    </ContactContainer>
  );
};

export default Contact;
