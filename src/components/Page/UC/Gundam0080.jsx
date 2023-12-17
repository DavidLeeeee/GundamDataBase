import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";
import 인트로 from "../../../assets/gundamDateset/0080/인트로.png";
import 알렉스 from "../../../assets/gundamDateset/0080/알렉스.png";
import 크리스티나 from "../../../assets/gundamDateset/0080/크리스티나.png";
import 자쿠2 from "../../../assets/gundamDateset/0080/자쿠2.png";
import 버나드 from "../../../assets/gundamDateset/0080/버나드.png";
import 캠퍼 from "../../../assets/gundamDateset/0080/캠퍼.png";
import 카민스키 from "../../../assets/gundamDateset/0080/카민스키.png";

const Gundam0080 = () => {
  const 지구연방 = [
    {
      MechaImage: 알렉스,
      name: "건담 NT-1 알렉스",
      PilotImage: 크리스티나,
      subtitle: "크리스티나 맥켄지",
    },
  ];
  const 지온공화국 = [
    {
      MechaImage: 자쿠2,
      name: "자쿠 II",
      PilotImage: 버나드,
      subtitle: "버나드 와이즈먼",
    },
    {
      MechaImage: 캠퍼,
      name: "캠퍼",
      PilotImage: 카민스키,
      subtitle: "카민스키",
    },
  ];
  const introductionText = `
[우주세기 0080] 
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 0080 : 주머니 속의 전쟁"
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="지구 연방"
        charactors1={지구연방}
        title2="지온 공화국"
        charactors2={지온공화국}
      />
    </>
  );
};

export default Gundam0080;
