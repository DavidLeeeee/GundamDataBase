// PosterLayout.jsx
import React from "react";
import Poster from "./PosterComponent";
import styled from "styled-components";

const PostersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4개의 열을 동일한 크기로 설정
  gap: 30px; // 그리드 아이템 사이의 간격 설정
  //justify-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 20px 14px;
  }
`;

const PosterLayout = ({ posters }) => {
  return (
    <PostersContainer>
      {posters.map((poster, index) => (
        <Poster
          key={index}
          name={poster.name}
          imageUrl={poster.imageUrl}
          path={poster.path}
          subtitle={poster.subtitle}
        />
      ))}
    </PostersContainer>
  );
};

export default PosterLayout;
