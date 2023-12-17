import React from "react";
import styled from "styled-components";

const IntroduceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 400px;
  padding: 40px 0 0 0;
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  border: 1px solid #000000;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  //align-self: flex-start; /* 좌측 정렬 */
  padding: 0px; /* 좌우 여백 추가 */
  text-align: center; /* 가운데 정렬 */
  border: 1px solid #000000;
  box-sizing: border-box; /* padding을 포함한 전체 크기로 설정 */
  //background-color: #f00000;
`;

const Title = styled.h2`
  width: 100%;
  border-bottom: 1px solid #000000;
  font-size: 22px;
  margin-bottom: 0px;
`;
const SubTitle = styled.p`
  width: 95%;
  font-size: 17px;
  margin: 0 0 0 20px;
  text-align: left; /* 좌측 정렬 */
`;

const IntroduceLayout = ({ title, subTitle, image }) => {
  return (
    <IntroduceContainer>
      <ImageContainer>
        <img src={image} alt="Introduction" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextContainer>
    </IntroduceContainer>
  );
};

export default IntroduceLayout;
