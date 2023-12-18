import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Page/Home";
import About from "./components/Page/About";
import Contact from "./components/Page/Contact";
import styled from "styled-components";
import GundamIcon from "./assets/gundamicon.png"; // Import PNG image directly
import ThemeComponent from "./components/Page_Component/themeComponent";
import ModalLayout from "./components/Page_Component/ModalLayout";
//각각의 페이지
import Gundam00 from "./components/Page/NoUC/Gundam00";
import Gundam002 from "./components/Page/NoUC/Gundam002";
import GundamSEED from "./components/Page/NoUC/GundamSEED";
import GundamSEEDD from "./components/Page/NoUC/GundamSEEDD";
import NoUC from "./components/Page/NoUC/NoUC";
import UC from "./components/Page/UC/UC";
import Gundam from "./components/Page/UC/Gundam";
import Gundam0080 from "./components/Page/UC/Gundam0080";
import Gundam0083 from "./components/Page/UC/Gundam0083";
import GundamHastaway from "./components/Page/UC/GundamHastaway";
import GundamUC from "./components/Page/UC/GundamUC";
import GundamZ from "./components/Page/UC/GundamZ";
import CharsCounter from "./components/Page/UC/CharsCounter";

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;
const AppContainer = styled.div`
  position: relative; /* 추가된 스타일 - DrawerOverlay를 포지셔닝하기 위해 필요 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ isHome }) =>
    isHome ? "none" : "1000px"}; // Conditional max-width
  margin: 0 auto; /* 가운데 정렬을 위한 margin 설정 */
  background: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  min-height: 100vh; /* 화면 세로 높이 전체를 차지하도록 설정 */
`;

const Navigation = styled.nav`
  background: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  width: 100%;
  max-width: 1000px;
  height: 4vh;
  border-bottom: 0.5px solid #333;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 98; /* 다른 요소 위에 나타나도록 설정 */
  ul {
    list-style: none;
    padding: 0 10px;
    display: flex;
    justify-content: flex-end; /* 우측 정렬로 수정 */
    align-items: center; /* 세로 중앙 정렬 */
    line-height: 2vh;
    flex-grow: 1; /* 추가된 스타일 - 남은 공간을 차지하도록 설정 */
    color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#000000")};
  }

  li {
    margin: 0 10px 0 5px;
  }

  li:first-child {
    margin-right: auto; /* Home을 좌측에 고정 */
  }

  li:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out; /* 부드러운 트랜지션을 위한 설정 */
  }
  @media (max-width: 768px) {
    padding: 30px 0 0 0;
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
  img {
    width: 26px; // Adjust the width as needed
    height: 26px; // Adjust the height as needed
    border-radius: 50%;
    background-color: lightgray;
    padding: 0px;
    margin-right: 5px;
  }
`;

const Drawer = styled.div`
  z-index: 99;
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#000000"};
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "0px")};
  transition: left 0.3s ease-in-out;

  ul {
    padding: 30px 0 0 10px;
    list-style: none;
    cursor: pointer; // Add cursor pointer to indicate clickability
  }

  li {
    width: 100%;
    margin-bottom: 12px;
    margin-top: ${({ index }) => (index === 2 ? "50px" : "0")};
  }
  /* 추가된 스타일 - li 내부의 a 태그에 스타일 적용 */
  a {
    display: block;
    width: 90%;
    padding: 5px; /* 더 큰 패딩으로 터치 영역 확보 */
    text-decoration: none;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    transition: background-color 0.3s ease-in-out;
  }

  a:hover {
    background-color: #333; /* 호버 시 배경색 변경 */
  }
  @media (max-width: 1370px) {
    width: 138px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  }
`;

const ThemeComponentWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  right: 14px;
  @media (max-width: 768px) {
    bottom: 34px;
    right: 10px;
  }
`;

//드로워를 닫기 위한 오버레이
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98; /* Overlay는 Drawer보다 낮은 z-index */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

//드로워의 글자 스타일링
const StyledLink = styled(Link)`
  color: #fff; /* 텍스트 색상을 흰색으로 변경 */
  text-decoration: none; /* 기본 텍스트 밑줄 제거 */
  font-weight: ${({ isBold }) =>
    isBold ? "bold" : "normal"}; /* 조건에 따라 두껍게 설정 */
  font-size: ${({ isBold }) =>
    isBold ? "18px" : "16px"}; /* 조건에 따라 두껍게 설정 */
  @media (max-width: 1370px) {
    font-size: ${({ isBold }) =>
      isBold ? "14px" : "12px"}; /* 조건에 따라 두껍게 설정 */
  }
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const DrawerToggleButton = styled(Link)`
  display: none;

  @media (max-width: 1370px) {
    display: block;
    background-color: ${({ theme }) =>
      theme === "light" ? "#000000" : "#ffffff"};
    color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#000000")};
    padding: 0 0 0 18px;
    margin: 0px;
    border: none;
    cursor: pointer;
    text-decoration: none; /* 링크의 기본 텍스트 밑줄 제거 */
  }
`;

//메인 앱 만들어주기
const MainApp = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const openModal = (component) => {
    setModalContent(component);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const currentTheme = useSelector((state) => state.theme.currentTheme); // 현재 theme 상태 가져오기

  const routes = [
    { path: "/UC", label: "◈ 우주세기", component: <UC /> }, //여기부터 우주세기
    // { path: "/GundamTheOrigin",label: "건담 디 오리진",component: <GundamTheOrigin />,},
    { path: "/Gundam", label: "기동전사 건담", component: <Gundam /> },
    {
      path: "/Gundam0080",
      label: "기동전사 건담 0080",
      component: <Gundam0080 />,
    },
    {
      path: "/Gundam0083",
      label: "기동전사 건담 0083",
      component: <Gundam0083 />,
    },
    { path: "/GundamZ", label: "기동전사 건담 Z", component: <GundamZ /> },
    {
      path: "/GundamChar",
      label: "건담 : 역습의 샤아",
      component: <CharsCounter />,
    },

    {
      path: "/GundamUC",
      label: "기동전사 건담 UC",
      component: <GundamUC />,
    },
    {
      path: "/GundamHastaway",
      label: "섬광의 하사웨이",
      component: <GundamHastaway />,
    },
    { path: "/NoUC", label: "◈ 비우주세기", component: <NoUC /> }, //여기부터 비우주세기
    {
      path: "/GundamSEED",
      label: "기동전사 건담 SEED",
      component: <GundamSEED />,
    },
    {
      path: "/GundamSEEDD",
      label: "SEED DESTINY",
      component: <GundamSEEDD />,
    },
    { path: "/Gundam00", label: "기동전사 건담 00", component: <Gundam00 /> },
    {
      path: "/Gundam002",
      label: "기동전사 건담 00 2부",
      component: <Gundam002 />,
    },
    //{path: "/GundamOrphans",label: "철혈의 오펀스",component: <GundamOrphans />,},
    //{ path: "/GundamWitch",label: "수성의 마녀", component: <GundamWitch />, },
  ];

  return (
    <AppBox theme={currentTheme}>
      <AppContainer isHome={isHome} theme={currentTheme}>
        {/* 네비게이션 */}
        {/* {!isHome && ( */}
        <Navigation theme={currentTheme}>
          <DrawerToggleButton
            to="#"
            onClick={toggleDrawer}
            theme={currentTheme}
          >
            ☰
          </DrawerToggleButton>
          {/* 상단 바 */}
          <ul>
            <li>
              <HomeLink to="/">
                <img src={GundamIcon} alt="Gundam Icon" />G PLAZA
              </HomeLink>
            </li>
            {/* <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li> */}
            <li onClick={() => openModal(<About />)}>About</li>
            <li onClick={() => openModal(<Contact />)}>Contact</li>
          </ul>
        </Navigation>
        {/* )} */}
        {/* 모달 렌더링 */}
        {modalContent && (
          <ModalLayout
            theme={currentTheme}
            onClose={closeModal}
            isOpen={isModalOpen}
          >
            {modalContent}
          </ModalLayout>
        )}
        {/* 바깥 영역 클릭시 모달 닫기 */}
        <Overlay isOpen={isDrawerOpen} onClick={closeDrawer} />
        {/* Drawer */}
        <Drawer
          isOpen={isDrawerOpen}
          onClick={closeDrawer}
          theme={currentTheme}
        >
          <ul>
            {routes.map(({ path, label, component }, index) => (
              <li
                key={path}
                style={{ marginTop: path === "/NoUC" ? "50px" : "0" }}
              >
                <StyledLink to={path} isBold={index === 0 || index === 8}>
                  {label}
                </StyledLink>
              </li>
            ))}
          </ul>
          <ThemeComponentWrapper>
            <ThemeComponent />
          </ThemeComponentWrapper>
        </Drawer>

        {/* 실제 화면 루트 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </AppContainer>
    </AppBox>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainApp />} />
        {/* You can define more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
