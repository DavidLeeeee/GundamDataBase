import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";

import 인트로 from "../../../assets/gundamDateset/GundamZ/인트로.png";
import 제타 from "../../../assets/gundamDateset/GundamZ/제타.png";
import 카미유 from "../../../assets/gundamDateset/GundamZ/카미유.png";
import 백식 from "../../../assets/gundamDateset/GundamZ/백식.png";
import 크와트로 from "../../../assets/gundamDateset/GundamZ/크와트로.png";
import 마크투 from "../../../assets/gundamDateset/GundamZ/마크2.png";
import 에마 from "../../../assets/gundamDateset/GundamZ/에마.png";
import 아가마 from "../../../assets/gundamDateset/GundamZ/아가마.png";
import 브라이트 from "../../../assets/gundamDateset/GundamZ/브라이트.png";
import 디제 from "../../../assets/gundamDateset/GundamZ/디제.png";
import 아무로 from "../../../assets/gundamDateset/GundamZ/아무로.png";
import 디오 from "../../../assets/gundamDateset/GundamZ/디오.png";
import 팝티머스 from "../../../assets/gundamDateset/GundamZ/시로코.png";
import 사이코 from "../../../assets/gundamDateset/GundamZ/사이코.png";
import 포우 from "../../../assets/gundamDateset/GundamZ/포우.png";
import 바운드 from "../../../assets/gundamDateset/GundamZ/바운드독.png";
import 제리드 from "../../../assets/gundamDateset/GundamZ/제리드.png";
import 함브라비 from "../../../assets/gundamDateset/GundamZ/함브라비.png";
import 아쟌 from "../../../assets/gundamDateset/GundamZ/아쟌.png";
import 큐베레이 from "../../../assets/gundamDateset/GundamZ/큐베레이.png";
import 하만 from "../../../assets/gundamDateset/GundamZ/하만.png";

const GundamZ = () => {
  const 에우고 = [
    {
      MechaImage: 제타,
      name: "제타 건담",
      PilotImage: 카미유,
      subtitle: "키미유 비단",
    },
    {
      MechaImage: 백식,
      name: "백식",
      PilotImage: 크와트로,
      subtitle: "크와트로 바지나",
    },
    {
      MechaImage: 마크투,
      name: "건담 MK-2",
      PilotImage: 에마,
      subtitle: "에마 신",
    },
    {
      MechaImage: 아가마,
      name: "넬 아가마",
      PilotImage: 브라이트,
      subtitle: "브라이트 노아",
    },
  ];
  const 카라바 = [
    {
      MechaImage: 디제,
      name: "디제",
      PilotImage: 아무로,
      subtitle: "아무로 레이",
    },
  ];
  const 티탄즈 = [
    {
      MechaImage: 디오,
      name: "The 0",
      PilotImage: 팝티머스,
      subtitle: "팝티머스 시로코",
    },
    {
      MechaImage: 사이코,
      name: "사이코 건담",
      PilotImage: 포우,
      subtitle: "포우 무라사메",
    },
    {
      MechaImage: 바운드,
      name: "바운드 독",
      PilotImage: 제리드,
      subtitle: "제리드 메사",
    },
    {
      MechaImage: 함브라비,
      name: "함브라비",
      PilotImage: 아쟌,
      subtitle: "아쟌 게이블",
    },
  ];
  const 액시즈 = [
    {
      MechaImage: 큐베레이,
      name: "큐베레이",
      PilotImage: 하만,
      subtitle: "하만 칸",
    },
  ];
  const introductionText = `
[우주세기 0087]
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 Z(機動戦士ガンダム Z)"
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="에우고"
        charactors1={에우고}
        title2="티탄즈"
        charactors2={티탄즈}
        title3="카라바"
        charactors3={카라바}
        title4="네오지온"
        charactors4={액시즈}
      />
    </>
  );
};

export default GundamZ;
