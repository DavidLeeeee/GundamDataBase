import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";

import 니콜 from "../../../assets/gundamDateset/SEED/니콜.png";
import 듀얼 from "../../../assets/gundamDateset/SEED/듀얼.png";
import 디아카 from "../../../assets/gundamDateset/SEED/디아카.png";
import 라고우 from "../../../assets/gundamDateset/SEED/라고우.png";
import 레이더 from "../../../assets/gundamDateset/SEED/레이더.png";
import 마류 from "../../../assets/gundamDateset/SEED/마류.png";
import 무우 from "../../../assets/gundamDateset/SEED/무우.png";
import 버스터 from "../../../assets/gundamDateset/SEED/버스터.png";
import 샤니 from "../../../assets/gundamDateset/SEED/샤니.png";
import 스트라이크 from "../../../assets/gundamDateset/SEED/스트라이크.png";
import 아스란 from "../../../assets/gundamDateset/SEED/아스란.png";
import 아크엔젤 from "../../../assets/gundamDateset/SEED/아크엔젤.png";
import 앤드류 from "../../../assets/gundamDateset/SEED/앤드류.png";
import 올가 from "../../../assets/gundamDateset/SEED/올가.png";
import 이자크 from "../../../assets/gundamDateset/SEED/이자크.png";
import 이지스 from "../../../assets/gundamDateset/SEED/이지스.png";
import 저스티스 from "../../../assets/gundamDateset/SEED/저스티스.png";
import 이터널 from "../../../assets/gundamDateset/SEED/이터널.png";
import 인트로 from "../../../assets/gundamDateset/SEED/인트로.png";
import 캘러미티 from "../../../assets/gundamDateset/SEED/캘러미티.png";
import 클로보 from "../../../assets/gundamDateset/SEED/클로보.png";
import 키라 from "../../../assets/gundamDateset/SEED/키라.png";
import 포비든 from "../../../assets/gundamDateset/SEED/포비든.png";
import 프로비던스 from "../../../assets/gundamDateset/SEED/프로비던스.png";
import 프리덤 from "../../../assets/gundamDateset/SEED/프리덤.png";
import 블리츠 from "../../../assets/gundamDateset/SEED/블리츠.png";
import 라우 from "../../../assets/gundamDateset/SEED/라우.png";

const GundamSEED = () => {
  const 삼척동맹 = [
    {
      MechaImage: 프리덤,
      name: "건담 프리덤",
      PilotImage: 키라,
      subtitle: "키라 야마토",
    },
    {
      MechaImage: 저스티스,
      name: "저스티스 건담",
      PilotImage: 아스란,
      subtitle: "아스란 자라",
    },
    {
      MechaImage: 스트라이크,
      name: "스트라이크 건담",
      PilotImage: 무우,
      subtitle: "무우 라 프라가",
    },
    {
      MechaImage: 버스터,
      name: "버스터 건담",
      PilotImage: 디아카,
      subtitle: "디아카 앨스먼",
    },
    {
      MechaImage: 이터널,
      name: "이터널",
      PilotImage: 앤드류,
      subtitle: "앤드류 발트펠트",
    },
    {
      MechaImage: 아크엔젤,
      name: "아크엔젤",
      PilotImage: 마류,
      subtitle: "마류 라미아스",
    },
  ];
  const 기타세력 = [
    {
      MechaImage: 프로비던스,
      name: "프로비던스 건담",
      PilotImage: 라우,
      subtitle: "자프트 / 라우 르 크루제",
    },
    {
      MechaImage: 이지스,
      name: "이지스 건담",
      PilotImage: 아스란,
      subtitle: "자프트 / 아스란 자라",
    },
    {
      MechaImage: 듀얼,
      name: "듀얼 건담",
      PilotImage: 이자크,
      subtitle: "자프트 / 이자크 쥴",
    },
    {
      MechaImage: 버스터,
      name: "버스터 건담",
      PilotImage: 디아카,
      subtitle: "자프트 / 디아카 앨스먼",
    },
    {
      MechaImage: 블리츠,
      name: "블리츠 건담",
      PilotImage: 니콜,
      subtitle: "자프트 / 니콜 아말피",
    },
    {
      MechaImage: 라고우,
      name: "라고우",
      PilotImage: 앤드류,
      subtitle: "자프트 / 앤드류 발트펠트",
    },
    {
      MechaImage: 레이더,
      name: "레이더 건담",
      PilotImage: 클로보,
      subtitle: "지구연합 / 클로토 브엘",
    },
    {
      MechaImage: 포비든,
      name: "포비든 건담",
      PilotImage: 샤니,
      subtitle: "지구연합 / 샤니 앤드라스",
    },
    {
      MechaImage: 캘러미티,
      name: "캘러미티 건담",
      PilotImage: 올가,
      subtitle: "지구연합 / 올가 사브낙",
    },
  ];
  const introductionText = `
A.D 2300 
`;
  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 SEED "
        subTitle={introductionText}
        image={인트로}
      />
      <CharactorsLayout
        title1="삼척동맹"
        charactors1={삼척동맹}
        title2="자프트 / 지구연합"
        charactors2={기타세력}
      />
    </>
  );
};

export default GundamSEED;
