import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";
import 인트로 from "../../../assets/gundamDateset/hasta/인트로.png";
import 크시 from "../../../assets/gundamDateset/hasta/크시.png";
import 하사웨이 from "../../../assets/gundamDateset/hasta/하사웨이.png";
import 가우만 from "../../../assets/gundamDateset/hasta/가우만.png";
import 멧사 from "../../../assets/gundamDateset/hasta/멧사.png";
import 페넬로페 from "../../../assets/gundamDateset/hasta/페넬로페.png";
import 레인 from "../../../assets/gundamDateset/hasta/레인.png";

const GundamHastaway = () => {
  const 마프티 = [
    {
      MechaImage: 크시,
      name: "크시 건담",
      PilotImage: 하사웨이,
      subtitle: "하사웨이 노아 (마프티)",
    },
    {
      MechaImage: 멧사,
      name: "멧사",
      PilotImage: 가우만,
      subtitle: "가우만 노빌",
    },
  ];
  const 지구연방 = [
    {
      MechaImage: 페넬로페,
      name: "페넬로페",
      PilotImage: 레인,
      subtitle: "레인 에임",
    },
  ];
  const introductionText = `
[우주세기 0105] 
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담: 섬광의 하사웨이 "
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="마프티"
        charactors1={마프티}
        title2="지구연방군"
        charactors2={지구연방}
      />
    </>
  );
};

export default GundamHastaway;
