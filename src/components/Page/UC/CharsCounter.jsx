import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";
import 인트로 from "../../../assets/gundamDateset/Char/인트로.png";
import 뉴 from "../../../assets/gundamDateset/Char/뉴.png";
import 아무로 from "../../../assets/gundamDateset/Char/아무로.png";
import 리가지 from "../../../assets/gundamDateset/Char/리가지.png";
import 케라 from "../../../assets/gundamDateset/Char/케라.png";
import 사자비 from "../../../assets/gundamDateset/Char/사자비.png";
import 라카이람 from "../../../assets/gundamDateset/Char/라카이람.png";
import 브라이트 from "../../../assets/gundamDateset/Char/브라이트.png";
import 샤아 from "../../../assets/gundamDateset/Char/샤아.png";
import 퀘스 from "../../../assets/gundamDateset/Char/퀘스.png";
import 아질 from "../../../assets/gundamDateset/Char/아질.png";
import 야크트1 from "../../../assets/gundamDateset/Char/야크트1.png";
import 레즌 from "../../../assets/gundamDateset/Char/레즌.png";
import 게스 from "../../../assets/gundamDateset/Char/게스.png";
import 기라도가 from "../../../assets/gundamDateset/Char/기라도가.png";

const CharsCounter = () => {
  const 지구연방 = [
    {
      MechaImage: 뉴,
      name: "뉴 건담",
      PilotImage: 아무로,
      subtitle: "아무로 레이",
    },
    {
      MechaImage: 리가지,
      name: "리가지",
      PilotImage: 케라,
      subtitle: "케라 수",
    },
    {
      MechaImage: 라카이람,
      name: "라카이람",
      PilotImage: 브라이트,
      subtitle: "브라이트 노아",
    },
  ];
  const 지온공화국 = [
    {
      MechaImage: 사자비,
      name: "사자비",
      PilotImage: 샤아,
      subtitle: "샤아 아즈나블",
    },
    {
      MechaImage: 아질,
      name: "알파 아질",
      PilotImage: 퀘스,
      subtitle: "퀘스 파라야",
    },
    {
      MechaImage: 야크트1,
      name: "야크트 도가",
      PilotImage: 게스,
      subtitle: "규네이 거스",
    },
    {
      MechaImage: 기라도가,
      name: "기라 도가",
      PilotImage: 레즌,
      subtitle: "레즌 슈나이더",
    },
  ];
  const introductionText = `
[우주세기 0093] 
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 : 역습의 샤아"
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="지구 연방군 독립부대 : 론도벨"
        charactors1={지구연방}
        title2="신생 네오지온"
        charactors2={지온공화국}
      />
    </>
  );
};

export default CharsCounter;
