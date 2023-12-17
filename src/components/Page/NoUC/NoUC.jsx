import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일드 컴포넌트로 내비게이션 스타일링
const NoUCNav = styled.nav`
  padding: 60px;
`;

const NoUC = () => {
  return (
    <div>
      <NoUCNav>
        <ul>
          {/* <li>
            <Link to="/GundamG">기동무투전 G 건담</Link>
          </li>
          <li>
            <Link to="/GundamW">신기동전기 건담 W</Link>
          </li> */}
          <li>
            <Link to="/GundamSEED">기동전사 건담 SEED</Link>
          </li>
          <li>
            <Link to="/GundamSEED">기동전사 건담 SEED DESTINY</Link>
          </li>
          <li>
            <Link to="/Gundam00">기동전사 건담 00</Link>
          </li>
          <li>
            <Link to="/Gundam002">기동전사 건담 00 2부</Link>
          </li>
          {/* <li>
            <Link to="/GundamOrphans">철혈의 오펀스</Link>
          </li>
          <li>
            <Link to="/GundamWitch">수성의 마녀</Link>
          </li> */}
        </ul>
      </NoUCNav>
      {/* 여기에 NoUC 페이지의 주요 컨텐츠 */}
    </div>
  );
};

export default NoUC;
