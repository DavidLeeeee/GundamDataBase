import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import PosterLayout from "../../Page_Component/PosterLayout";

import 건담 from "../../../assets/gundamDateset/Gundam/인트로.png";
import UCo from "../../../assets/gundamDateset/UC/인트로.png";
import Z from "../../../assets/gundamDateset/GundamZ/인트로.png";
import Char from "../../../assets/gundamDateset/Char/인트로.png";
import OO80 from "../../../assets/gundamDateset/0080/인트로.png";
import OO83 from "../../../assets/gundamDateset/0083/인트로.png";
import Hastaway from "../../../assets/gundamDateset/hasta/인트로.png";

// 스타일드 컴포넌트로 내비게이션 스타일링
const UCNav = styled.nav`
  padding: 50px 0;
`;

const postersData = [
  {
    name: "기동전사 건담",
    imageUrl: 건담,
    path: "/Gundam",
    subtitle: "1979~1980",
  },
  {
    name: "기동전사 건담 0080",
    imageUrl: OO80,
    path: "/Gundam0080",
    subtitle: "1989",
  },
  {
    name: "기동전사 건담 0083",
    imageUrl: OO83,
    path: "/Gundam0083",
    subtitle: "1991~1992",
  },
  {
    name: "기동전사 건담 Z",
    imageUrl: Z,
    path: "/GundamZ",
    subtitle: "1985~1986",
  },
  {
    name: "기동전사 건담 : 역습의 샤아",
    imageUrl: Char,
    path: "/GundamChar",
    subtitle: "1988",
  },
  {
    name: "기동전사 건담 UC",
    imageUrl: UCo,
    path: "/GundamUC",
    subtitle: "2010~2014",
  },
  {
    name: "기동전사 건담 : 섬광의 하사웨이",
    imageUrl: Hastaway,
    path: "/GundamHastaway",
  },
  // 추가 포스터 데이터
];

const UC = () => {
  return (
    <div>
      <UCNav>
        <PosterLayout posters={postersData} />
      </UCNav>
      {/* 여기에 UC 페이지의 주요 컨텐츠 */}
    </div>
  );
};

export default UC;
