import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
  height: 100vh;
  width: ${(props) => props.width || "300px"};
  background-color: white;
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  overflow-y: auto;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  visibility: ${({ isVisible }) =>
    isVisible ? "visible" : "hidden"}; // 추가된 스타일

  @media (min-width: 1371px) {
  }
`;

const CloseButton = styled.button`
  width: 100%;
  height: 20%;
  background-color: #000;
  color: #fff;
  font-size: 2em;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;

const ModalLayout = ({ children, onClose, isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <ModalContainer isOpen={isOpen} isVisible={isVisible}>
      {isVisible && children}
      <CloseButton onClick={onClose}>Close</CloseButton>
    </ModalContainer>
  );
};

export default ModalLayout;
