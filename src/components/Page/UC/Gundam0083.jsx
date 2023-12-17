import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";
import 인트로 from "../../../assets/gundamDateset/0083/인트로.png";
import 코우 from "../../../assets/gundamDateset/0083/코우.png";
import 일호기 from "../../../assets/gundamDateset/0083/1호기.png";
import 척 from "../../../assets/gundamDateset/0083/척.png";
import 짐캐논 from "../../../assets/gundamDateset/0083/짐캐논.png";
import 이호기 from "../../../assets/gundamDateset/0083/2호기.png";
import 삼호기 from "../../../assets/gundamDateset/0083/3호기.png";
import 가토 from "../../../assets/gundamDateset/0083/가토.png";
import 노이에질 from "../../../assets/gundamDateset/0083/노이에질.png";

const Gundam0083 = () => {
  const 지구연방 = [
    {
      MechaImage: 일호기,
      name: "건담 시작 1호기",
      PilotImage: 코우,
      subtitle: "코우 우라키",
    },
    {
      MechaImage: 짐캐논,
      name: "짐 캐논 II",
      PilotImage: 척,
      subtitle: "척 키스",
    },
    {
      MechaImage: 삼호기,
      name: "건담 시작 3호기",
      PilotImage: 코우,
      subtitle: "코우 우라키",
    },
  ];
  const 지온공화국 = [
    {
      MechaImage: 이호기,
      name: "건담 시작 2호기",
      PilotImage: 가토,
      subtitle: "애너벨 가토",
    },
    {
      MechaImage: 노이에질,
      name: "노이에 질",
      PilotImage: 가토,
      subtitle: "애너벨 가토",
    },
  ];
  const introductionText = `
[우주세기 0083] 
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 0083 : 스타더스트 메모리"
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="지구 연방"
        charactors1={지구연방}
        title2="데라즈 플리트 (지온공국군 잔당)"
        charactors2={지온공화국}
      />
    </>
  );
};

export default Gundam0083;
