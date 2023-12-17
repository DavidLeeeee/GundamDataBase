import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";

import 가이아 from "../../../assets/gundamDateset/SEEDD/가이아.png";
import 이자크 from "../../../assets/gundamDateset/SEEDD/이자크.png";
import 가이아앤드류 from "../../../assets/gundamDateset/SEEDD/가이아앤드류.png";
import 거너 from "../../../assets/gundamDateset/SEEDD/거너.png";
import 구프이자크 from "../../../assets/gundamDateset/SEEDD/구프이자크.png";
import 네오 from "../../../assets/gundamDateset/SEEDD/네오.png";
import 데스티니 from "../../../assets/gundamDateset/SEEDD/데스티니.png";
import 디스트로이 from "../../../assets/gundamDateset/SEEDD/디스트로이.png";
import 디아카 from "../../../assets/gundamDateset/SEEDD/디아카2.png";
import 라크스 from "../../../assets/gundamDateset/SEEDD/라크스.png";
import 레이 from "../../../assets/gundamDateset/SEEDD/레이자바렐.png";
import 레전드 from "../../../assets/gundamDateset/SEEDD/레전드.png";
import 루나마리아 from "../../../assets/gundamDateset/SEEDD/루나마리아.png";
import 마류 from "../../../assets/gundamDateset/SEEDD/마류2.png";
import 무우 from "../../../assets/gundamDateset/SEEDD/무우.png";
import 스텔라 from "../../../assets/gundamDateset/SEEDD/스텔라.png";
import 스트라이크프리덤 from "../../../assets/gundamDateset/SEEDD/스트라이크프리덤.png";
import 스팅 from "../../../assets/gundamDateset/SEEDD/스팅.png";
import 시라누이 from "../../../assets/gundamDateset/SEEDD/시라누이.png";
import 신 from "../../../assets/gundamDateset/SEEDD/신.png";
import 아스란 from "../../../assets/gundamDateset/SEEDD/아스란2.png";
import 아울 from "../../../assets/gundamDateset/SEEDD/아울.png";
import 아크엔젤 from "../../../assets/gundamDateset/SEEDD/아크엔젤.png";
import 앤드류 from "../../../assets/gundamDateset/SEEDD/앤드류2.png";
import 어비스 from "../../../assets/gundamDateset/SEEDD/어비스.png";
import 오오와시 from "../../../assets/gundamDateset/SEEDD/오오와시.png";
import 이터널 from "../../../assets/gundamDateset/SEEDD/이터널.png";
import 윈덤 from "../../../assets/gundamDateset/SEEDD/윈덤.png";
import 인트로 from "../../../assets/gundamDateset/SEEDD/인트로.png";
import 인피니트저스티스 from "../../../assets/gundamDateset/SEEDD/인피니트저스티스.png";
import 임펄스 from "../../../assets/gundamDateset/SEEDD/임펄스.png";
import 자쿠워리어 from "../../../assets/gundamDateset/SEEDD/자쿠워리어.png";
import 카가리 from "../../../assets/gundamDateset/SEEDD/카가리.png";
import 카오스 from "../../../assets/gundamDateset/SEEDD/카오스.png";
import 키라 from "../../../assets/gundamDateset/SEEDD/키라2.png";

const GundamSEEDD = () => {
  const 삼척동맹 = [
    {
      MechaImage: 스트라이크프리덤,
      name: "스트라이크프리덤 건담",
      PilotImage: 키라,
      subtitle: "키라 야마토",
    },
    {
      MechaImage: 인피니트저스티스,
      name: "인피니트 저스티스 건담",
      PilotImage: 아스란,
      subtitle: "아스란 자라",
    },
    {
      MechaImage: 오오와시,
      name: "오오와시 아카츠키",
      PilotImage: 카가리,
      subtitle: "카가리 유라 아스하",
    },
    {
      MechaImage: 시라누이,
      name: "시라누이 아카츠키",
      PilotImage: 무우,
      subtitle: "무우 라 프라가",
    },
    {
      MechaImage: 가이아앤드류,
      name: "가이아 건담",
      PilotImage: 앤드류,
      subtitle: "앤드류 발트펠트",
    },
    {
      MechaImage: 이터널,
      name: "이터널",
      PilotImage: 라크스,
      subtitle: "라크스 클라인",
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
      MechaImage: 임펄스,
      name: "임펄스 건담",
      PilotImage: 신,
      subtitle: "자프트 / 신 아스카",
    },
    {
      MechaImage: 데스티니,
      name: "테스티니 건담",
      PilotImage: 신,
      subtitle: "자프트 / 신 아스카",
    },
    {
      MechaImage: 자쿠워리어,
      name: "자쿠워리어",
      PilotImage: 루나마리아,
      subtitle: "자프트 / 루나마리아 호크",
    },
    {
      MechaImage: 레전드,
      name: "레전드 건담",
      PilotImage: 레이,
      subtitle: "자프트 / 레이 자 바렐",
    },
    {
      MechaImage: 구프이자크,
      name: "구프 이그나이티드",
      PilotImage: 이자크,
      subtitle: "자프트 / 이자크 쥴",
    },
    {
      MechaImage: 거너,
      name: "거너 자쿠 워리어",
      PilotImage: 디아카,
      subtitle: "자프트 / 디아카 앨스먼",
    },
    {
      MechaImage: 윈덤,
      name: "윈덤",
      PilotImage: 네오,
      subtitle: "지구연합 / 네오 로아노크",
    },
    {
      MechaImage: 디스트로이,
      name: "디스트로이 건담",
      PilotImage: 스텔라,
      subtitle: "지구연합 / 스텔라 루셰",
    },
    {
      MechaImage: 카오스,
      name: "카오스 건담",
      PilotImage: 스팅,
      subtitle: "지구연합 / 스팅 오클레이",
    },
    {
      MechaImage: 어비스,
      name: "어비스 건담",
      PilotImage: 아울,
      subtitle: "지구연합 / 아울 니더",
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

export default GundamSEEDD;
