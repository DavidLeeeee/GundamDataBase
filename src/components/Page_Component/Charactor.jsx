import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CharactorContainer = styled.div`
  background-color: "#ffffff";
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%; /* 부모의 넓이의 30%를 차지 */
  height: width * 1.5; /* 세로길이는 가로길이의 2배 */
  max-height: 335px;
  margin: 5px 0 0 0;
  position: relative; /* 자식 엘리먼트의 위치를 상대적(relative)으로 설정 */
  border: 3px solid
    ${({ theme }) => (theme === "light" ? "#ffffff" : "#000000")};
`;

const MechaImage = styled.img`
  background-color: "#ffffff";
  width: 100%; /* 부모의 넓이를 100% 차지 */
  height: 300px;
  object-fit: fill; // 변경
  border-radius: 0%;
  margin-bottom: 0px;
`;

const CharactorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0%;
  margin-bottom: 0px;
  border: 1px solid #000000; /* 테두리 추가 */
`;
const CharactorOverlay = styled.div`
  position: absolute; /* 부모에 대해 상대적 위치 지정 */
  bottom: 35px;
  right: 0;
  width: 40%; /* 가로길이의 1/3 */
  height: width; /* 세로길이의 1/3 */
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: flex-end; /* 자식 엘리먼트를 아래로 정렬 */
`;

const CharactorName = styled.div`
  width: 100%;
  background-color: #000000;
  font-size: 14px;
  font-weight: bold;
  color: #fff; /* 텍스트 색상을 흰색으로 */
`;

const CharactorSubtitle = styled.div`
  width: 100%;
  background-color: #000000;
  font-size: 12px;
  color: #ebebeb; /* 텍스트 색상을 회색으로 */
`;

const Charactor = ({ mechaImage, pilotImage, name, subtitle }) => {
  const currentTheme = useSelector((state) => state.theme.currentTheme); // 현재 theme 상태 가져오기
  return (
    <CharactorContainer theme={currentTheme}>
      <MechaImage src={mechaImage} alt={name} />
      <CharactorOverlay>
        <CharactorImage src={pilotImage} alt={`Pilot ${name}`} />
      </CharactorOverlay>
      <CharactorName theme={currentTheme}>{name}</CharactorName>
      <CharactorSubtitle theme={currentTheme}>{subtitle}</CharactorSubtitle>
    </CharactorContainer>
  );
};

export default Charactor;
