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

const ModalLayout = ({ children, onClose, isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // 애니메이션이 완료된 후에 isVisible 상태를 변경
      const timer = setTimeout(() => setIsVisible(false), 300); // 애니메이션 지속 시간
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <ModalContainer isOpen={isOpen} isVisible={isVisible}>
      {isVisible && children}
      <button onClick={onClose}>Close</button>
    </ModalContainer>
  );
};

export default ModalLayout;
