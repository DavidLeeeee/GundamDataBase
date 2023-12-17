import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일드 컴포넌트로 내비게이션 스타일링
const UCNav = styled.nav`
  padding: 60px;
`;

const UC = () => {
  return (
    <div>
      <UCNav>
        <ul>
          <li>
            <Link to="/Gundam">기동전사 건담</Link>
          </li>
          <li>
            <Link to="/Gundam0080">기동전사 건담 0080</Link>
          </li>
          <li>
            <Link to="/Gundam0083">기동전사 건담 0083</Link>
          </li>
          <li>
            <Link to="/GundamZ">기동전사 건담 Z</Link>
          </li>
          <li>
            <Link to="/GundamChar">기동전사 건담 : 역습의 샤아</Link>
          </li>
          <li>
            <Link to="/GundamUC">기동전사 건담 UC</Link>
          </li>
          <li>
            <Link to="/GundamHastaway">섬광의 하사웨이</Link>
          </li>
        </ul>
      </UCNav>
      {/* 여기에 UC 페이지의 주요 컨텐츠 */}
    </div>
  );
};

export default UC;
