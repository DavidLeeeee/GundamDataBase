import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";
import 건담 from "../../../assets/gundamDateset/Gundam/건담.png";
import 아무로 from "../../../assets/gundamDateset/Gundam/아무로.png";
import 하야토 from "../../../assets/gundamDateset/Gundam/하야토.png";
import 건탱크 from "../../../assets/gundamDateset/Gundam/건탱크.png";
import 카이 from "../../../assets/gundamDateset/Gundam/카이.png";
import 건캐논 from "../../../assets/gundamDateset/Gundam/건캐논.png";
import 브라이트 from "../../../assets/gundamDateset/Gundam/브라이트.png";
import 화이트베이스 from "../../../assets/gundamDateset/Gundam/화이트베이스.png";
import 샤아 from "../../../assets/gundamDateset/Gundam/샤아.png";
import 자쿠 from "../../../assets/gundamDateset/Gundam/자쿠.png";
import 라라아 from "../../../assets/gundamDateset/Gundam/라라아.png";
import 엘메스 from "../../../assets/gundamDateset/Gundam/엘메스.png";
import 빅잠 from "../../../assets/gundamDateset/Gundam/빅잠.png";
import 도즐 from "../../../assets/gundamDateset/Gundam/도즐.png";
import 람바 from "../../../assets/gundamDateset/Gundam/람바.png";
import 구프 from "../../../assets/gundamDateset/Gundam/구프.png";
import 인트로 from "../../../assets/gundamDateset/Gundam/인트로.png";

const Gundam = () => {
  const 지구연방 = [
    {
      MechaImage: 건담,
      name: "건담",
      PilotImage: 아무로,
      subtitle: "아무로 레이",
    },
    {
      MechaImage: 건탱크,
      name: "건탱크",
      PilotImage: 하야토,
      subtitle: "하야토 코바야시",
    },
    {
      MechaImage: 건캐논,
      name: "건캐논",
      PilotImage: 카이,
      subtitle: "카이 시덴",
    },
    {
      MechaImage: 화이트베이스,
      name: "화이트 베이스",
      PilotImage: 브라이트,
      subtitle: "브라이트 노아",
    },
  ];
  const 지온공화국 = [
    {
      MechaImage: 자쿠,
      name: "자쿠(샤아 전용기)",
      PilotImage: 샤아,
      subtitle: "샤아 아즈나블",
    },
    {
      MechaImage: 구프,
      name: "구프",
      PilotImage: 람바,
      subtitle: "람바 랄",
    },
    {
      MechaImage: 엘메스,
      name: "엘메스",
      PilotImage: 라라아,
      subtitle: "라라아 슨",
    },
    {
      MechaImage: 빅잠,
      name: "빅잠",
      PilotImage: 도즐,
      subtitle: "도즐 자비",
    },
  ];
  const introductionText = `
[우주세기 0079] \n
과다하게 늘어난 인구를 우주로 이주시킨 지도 벌써 반세기가 지나고 있었다.
지구 주변의 거대한 인공도시는 인류에게 제 2의 고향이 되었다.
사람들은 그곳에서 살면서 아이를 낳고, 기르며, 죽어갔다.

우주세기 0079. 지구에서 가장 먼 우주도시 사이드3는 지온 공국이라 자칭하며
지구연방정부에 대항하여 독립전쟁을 시작하였다.
한 달 남짓한 싸움에서 지온 공국과 연방군은 총 인구의 절반을 죽음으로 내몰았다.

인류는 이러한 자신들의 행위에 대하여 공포를 느꼈다.
전쟁은 교착상태에 빠지고 약 8개월 정도가 흘렀다.
`;

  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 (機動戦士ガンダム)"
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

export default Gundam;
