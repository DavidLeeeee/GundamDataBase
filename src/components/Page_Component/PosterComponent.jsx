import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PosterWrapper = styled(Link)`
  display: block; //블럭으로 link가용선택범위 확장
  text-decoration: none; // 링크 기본 스타일 제거
  color: inherit; // 링크 색상 상속
  background-color: #000000;
  height: 400px;
  @media (max-width: 768px) {
    height: 320px;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 362px;
  @media (max-width: 768px) {
    height: 280px;
  }
`;

const PosterName = styled.div`
  height: 16px;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const YearSubtitle = styled.div`
  text-align: center;
  width: 100%;
  height: 14px;
  font-size: 12px;
  padding: 1px 0 0 0;
  color: #ebebeb; /* 텍스트 색상을 회색으로 */
`;

const Poster = ({ name, imageUrl, path, subtitle }) => {
  return (
    <PosterWrapper to={path}>
      <PosterImage src={imageUrl} alt={name} />
      <PosterName>{name}</PosterName>
      <YearSubtitle>{subtitle}</YearSubtitle>
    </PosterWrapper>
  );
};

export default Poster;
