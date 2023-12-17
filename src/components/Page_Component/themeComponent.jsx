import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../components/Redux/themeSlice";
import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const moveRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ThemeWrapper = styled.div`
  display: flex;
  width: 72px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  padding: 0 5px;
  background: ${({ theme }) => (theme === "light" ? "#f4f4f4" : "#2c2c2c")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  transition: background 0.3s ease;
  justify-content: ${({ theme }) =>
    theme === "light" ? "flex-start" : "flex-end"};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => (theme === "light" ? "#e1e1e1" : "#444")};
  }
  @media (max-width: 768px) {
    width: 44px;
    height: 26px;
    padding: 0 3px;
  }
  button {
    background: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    border-radius: 30px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    animation: ${({ theme }) => (theme === "dark" ? moveRight : moveLeft)} 0.3s
      ease;
    &:focus {
      outline: none;
    }
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const ThemeComponent = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  return (
    <ThemeWrapper theme={currentTheme} onClick={() => dispatch(toggleTheme())}>
      <button />
    </ThemeWrapper>
  );
};

export default ThemeComponent;
