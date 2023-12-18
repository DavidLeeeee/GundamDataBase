import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import PosterLayout from "../../Page_Component/PosterLayout";

import SEED from "../../../assets/gundamDateset/SEED/인트로.png";
import SEEDD from "../../../assets/gundamDateset/SEEDD/인트로.png";
import OO from "../../../assets/gundamDateset/00/인트로.png";
import OO2 from "../../../assets/gundamDateset/002/인트로.png";

// 스타일드 컴포넌트로 내비게이션 스타일링
const NoUCNav = styled.nav`
  padding: 50px 0;
`;

const postersData = [
  {
    name: "기동전사 건담 SEED",
    imageUrl: SEED,
    path: "/GundamSEED",
    subtitle: "2002~2003",
  },
  {
    name: "기동전사 건담 SEED DESTINY",
    imageUrl: SEEDD,
    path: "/GundamSEEDD",
    subtitle: "2004~2005",
  },
  {
    name: "기동전사 건담 00",
    imageUrl: OO,
    path: "/Gundam00",
    subtitle: "2007~2008",
  },
  {
    name: "기동전사 건담 00 2부",
    imageUrl: OO2,
    path: "/Gundam002",
    subtitle: "2008~2009",
  },
  // 추가 포스터 데이터
];

const NoUC = () => {
  return (
    <div>
      <NoUCNav>
        <PosterLayout posters={postersData} />
      </NoUCNav>
    </div>
  );
};

export default NoUC;
