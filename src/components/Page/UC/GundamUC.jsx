import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";
import 인트로 from "../../../assets/gundamDateset/UC/인트로.png";
import 유니콘 from "../../../assets/gundamDateset/UC/유니콘.png";
import 버나지 from "../../../assets/gundamDateset/UC/버나지.png";
import 델타 from "../../../assets/gundamDateset/UC/델타.png";
import 리디 from "../../../assets/gundamDateset/UC/리디.png";
import 벤시 from "../../../assets/gundamDateset/UC/벤시.png";
import 아가마 from "../../../assets/gundamDateset/UC/아가마.png";
import 오토 from "../../../assets/gundamDateset/UC/오토.png";
import 라카이람 from "../../../assets/gundamDateset/UC/라카이람.png";
import 브라이트 from "../../../assets/gundamDateset/UC/브라이트.png";
import 시난주 from "../../../assets/gundamDateset/UC/시난주.png";
import 프론탈 from "../../../assets/gundamDateset/UC/프론탈.png";
import 마리다 from "../../../assets/gundamDateset/UC/마리다.png";
import 크샤트리야 from "../../../assets/gundamDateset/UC/크샤트리야.png";
import 안젤로기라줄루 from "../../../assets/gundamDateset/UC/안젤로기라줄루.png";
import 안젤로 from "../../../assets/gundamDateset/UC/안젤로.png";
import 줄루 from "../../../assets/gundamDateset/UC/줄루.png";
import 진네만 from "../../../assets/gundamDateset/UC/진네만.png";
import 로니 from "../../../assets/gundamDateset/UC/로니.png";
import 샴블로 from "../../../assets/gundamDateset/UC/샴블로.png";

const GundamUC = () => {
  const 지구연방 = [
    {
      MechaImage: 유니콘,
      name: "유니콘 건담",
      PilotImage: 버나지,
      subtitle: "버나지 링크스",
    },
    {
      MechaImage: 델타,
      name: "델타 플러스",
      PilotImage: 리디,
      subtitle: "리디 마세나스",
    },

    {
      MechaImage: 아가마,
      name: "넬 아가마",
      PilotImage: 오토,
      subtitle: "오토 미타스",
    },
    {
      MechaImage: 라카이람,
      name: "라카이람",
      PilotImage: 브라이트,
      subtitle: "브라이트 노아",
    },
    {
      MechaImage: 벤시,
      name: "유니콘 건담 2호기 밴시",
      PilotImage: 리디,
      subtitle: "리디 마세나스",
    },
  ];
  const 소데츠키 = [
    {
      MechaImage: 시난주,
      name: "시난주",
      PilotImage: 프론탈,
      subtitle: "풀 프론탈",
    },
    {
      MechaImage: 안젤로기라줄루,
      name: "기라 줄루 : 안젤로 전용기",
      PilotImage: 안젤로,
      subtitle: "안젤로 자우퍼",
    },
    {
      MechaImage: 크샤트리야,
      name: "크샤트리아",
      PilotImage: 마리다,
      subtitle: "마리다 크루즈",
    },
    {
      MechaImage: 샴블로,
      name: "샴블로",
      PilotImage: 로니,
      subtitle: "로니 가베이",
    },
    {
      MechaImage: 줄루,
      name: "기라 줄루",
      PilotImage: 진네만,
      subtitle: "스베로아 진네만",
    },
  ];
  const introductionText = `
[우주세기 0096] 
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 UC"
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="지구 연방군 독립부대 : 론도벨"
        charactors1={지구연방}
        title2="소데츠키"
        charactors2={소데츠키}
      />
    </>
  );
};

export default GundamUC;
