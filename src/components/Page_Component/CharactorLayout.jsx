// CharactorsLayout.jsx
import React from "react";
import styled from "styled-components";
import Charactor from "./Charactor";

const CharactorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 0 0 0;
  padding: 0 0 10px 0;
  width: 100%;
  border-bottom: 3px solid #000000; /* 테두리 추가 */
  border-top: 0px solid #000000;
  @media (max-width: 1370px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CharactorsGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CharactorSection = styled.div`
  flex: 0.5;
  text-align: center;
  display: flex;
  width: 100%;
  flex-wrap: wrap; // Allow items to wrap to the next line
  justify-content: space-around;
  //align-items: center; // Center items horizontally

  h1 {
    width: 100%;
    height: 34px;
    background-color: #000000;
    font-size: 26px;
    margin-bottom: 0px;
    color: #fff;
  }
`;

const CharactorsLayout = ({ title1, charactors1, title2, charactors2 }) => {
  return (
    <CharactorsContainer>
      <CharactorsGroup>
        <CharactorSection>
          <h1>{title1}</h1>
          {charactors1.map((data, index) => (
            <Charactor
              key={index}
              mechaImage={data.MechaImage}
              pilotImage={data.PilotImage}
              name={data.name}
              subtitle={data.subtitle}
            />
          ))}
        </CharactorSection>

        <CharactorSection>
          <h1>{title2}</h1>
          {charactors2.map((data, index) => (
            <Charactor
              key={index}
              mechaImage={data.MechaImage}
              pilotImage={data.PilotImage}
              name={data.name}
              subtitle={data.subtitle}
            />
          ))}
        </CharactorSection>
      </CharactorsGroup>
    </CharactorsContainer>
  );
};

export default CharactorsLayout;
