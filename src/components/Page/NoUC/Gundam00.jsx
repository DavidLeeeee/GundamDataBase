import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";

import 엑시아 from "../../../assets/gundamDateset/00/엑시아.png";
import 세츠나 from "../../../assets/gundamDateset/00/세츠나.png";
import 듀나메스 from "../../../assets/gundamDateset/00/듀나메스.png";
import 록온 from "../../../assets/gundamDateset/00/록온1.png";
import 그라함 from "../../../assets/gundamDateset/00/그라함.png";
import 플래그 from "../../../assets/gundamDateset/00/플래그.png";
import 네나 from "../../../assets/gundamDateset/00/네나.png";
import 드라이 from "../../../assets/gundamDateset/00/드라이.png";
import 미하일 from "../../../assets/gundamDateset/00/미하일.png";
import 세르게이 from "../../../assets/gundamDateset/00/세르게이.png";
import 버체 from "../../../assets/gundamDateset/00/버체.png";
import 소마 from "../../../assets/gundamDateset/00/소마.png";
import 아인 from "../../../assets/gundamDateset/00/아인.png";
import 알레한드로 from "../../../assets/gundamDateset/00/알레한드로.png";
import 알렐루야 from "../../../assets/gundamDateset/00/알렐루야1.png";
//import 알바아론 from "../../../assets/gundamDateset/00/알바아론.png";
import 스메라기 from "../../../assets/gundamDateset/00/스메라기.png";
import 알바트론 from "../../../assets/gundamDateset/00/알바트론.png";
import 요한 from "../../../assets/gundamDateset/00/요한.png";
import 인트로 from "../../../assets/gundamDateset/00/인트로.png";
import 톨레미 from "../../../assets/gundamDateset/00/톨레미.png";
import 쯔바이 from "../../../assets/gundamDateset/00/쯔바이.png";
import 큐리오스 from "../../../assets/gundamDateset/00/큐리오스.png";
import 티에렌 from "../../../assets/gundamDateset/00/티에렌.png";
import 티에렌1 from "../../../assets/gundamDateset/00/티에렌1.png";
import 티에리아 from "../../../assets/gundamDateset/00/티에리아.png";

const Gundam00 = () => {
  const 셀레스티얼비잉 = [
    {
      MechaImage: 엑시아,
      name: "건담 엑시아",
      PilotImage: 세츠나,
      subtitle: "세츠나 F 세이에이",
    },
    {
      MechaImage: 듀나메스,
      name: "건담 듀나메스",
      PilotImage: 록온,
      subtitle: "록온 스트라토스",
    },
    {
      MechaImage: 큐리오스,
      name: "건담 큐리오스",
      PilotImage: 알렐루야,
      subtitle: "알렐루야 햅티즘",
    },
    {
      MechaImage: 버체,
      name: "건담 버체",
      PilotImage: 티에리아,
      subtitle: "티에리아 아데",
    },
    {
      MechaImage: 톨레미,
      name: "프톨레마이오스",
      PilotImage: 스메라기,
      subtitle: "스메라기 리 노리에가",
    },
  ];
  const 기타세력 = [
    {
      MechaImage: 아인,
      name: "건담 쓰로네 아인",
      PilotImage: 요한,
      subtitle: "팀 트리니티 / 요한 트리니티",
    },
    {
      MechaImage: 쯔바이,
      name: "건담 쓰로네 쯔바이",
      PilotImage: 미하일,
      subtitle: "팀 트리니티 / 미하일 트리니티",
    },
    {
      MechaImage: 드라이,
      name: "건담 쓰로네 드라이",
      PilotImage: 네나,
      subtitle: "팀 트리니티 / 네나 트리니티",
    },
    {
      MechaImage: 플래그,
      name: "유니온 플래그",
      PilotImage: 그라함,
      subtitle: "유니온 / 그라함 에이커",
    },
    {
      MechaImage: 티에렌1,
      name: "티에렌",
      PilotImage: 세르게이,
      subtitle: "인혁연 / 세르게이 스밀노프",
    },
    {
      MechaImage: 티에렌,
      name: "티에렌 타오츠",
      PilotImage: 소마,
      subtitle: "인혁연 / 소마 필리스",
    },
    {
      MechaImage: 알바트론,
      name: "알바트론",
      PilotImage: 알레한드로,
      subtitle: "UN / 알레한드로 코너",
    },
  ];
  const introductionText = `
A.D 2300 
`;
  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 00 "
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="솔레스티얼 비잉"
        charactors1={셀레스티얼비잉}
        title2="기타 세력"
        charactors2={기타세력}
      />
    </>
  );
};

export default Gundam00;
