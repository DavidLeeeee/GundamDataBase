import React from "react";
import CharactorsLayout from "../../Page_Component/CharactorLayout";
import IntroduceLayout from "../../Page_Component/introducelayout";

import 세라비 from "../../../assets/gundamDateset/002/세라비.png";
import 티에리아 from "../../../assets/gundamDateset/002/티에리아2.png";
import 알렐루야 from "../../../assets/gundamDateset/002/알렐루야.png";
import 아리오스 from "../../../assets/gundamDateset/002/아리오스.png";
import 안드레이 from "../../../assets/gundamDateset/002/안드레이.png";
import 록온 from "../../../assets/gundamDateset/002/록온.png";
import 켈딤 from "../../../assets/gundamDateset/002/켈딤.png";
import 더블오라이저 from "../../../assets/gundamDateset/002/더블오라이저.png";
import 더블오 from "../../../assets/gundamDateset/002/더블오.png";
import 세츠나 from "../../../assets/gundamDateset/002/세츠나2.png";
import 아르케 from "../../../assets/gundamDateset/002/아르케.png";
import 징크스 from "../../../assets/gundamDateset/002/징크스.png";
import 아리알 from "../../../assets/gundamDateset/002/아리알.png";
import 아쳐 from "../../../assets/gundamDateset/002/아쳐.png";
import 톨레미 from "../../../assets/gundamDateset/002/톨레미.png";
import 소마 from "../../../assets/gundamDateset/002/소마.png";
import 스메라기 from "../../../assets/gundamDateset/002/스메라기.png";
import 미스터 from "../../../assets/gundamDateset/002/미스터.png";
import 스사노오 from "../../../assets/gundamDateset/002/스사노오.png";
import 리본즈 from "../../../assets/gundamDateset/002/리본즈.png";
import 리본즈건담 from "../../../assets/gundamDateset/002/리본즈건담.png";
import 리바이브 from "../../../assets/gundamDateset/002/리바이브.png";
import 가뎃사 from "../../../assets/gundamDateset/002/가뎃사.png";
import 인트로 from "../../../assets/gundamDateset/002/인트로.png";
import 가랏조힐링 from "../../../assets/gundamDateset/002/가랏조힐링.png";
import 브링 from "../../../assets/gundamDateset/002/브링.png";
import 힐링 from "../../../assets/gundamDateset/002/힐링.png";
import 가랏조 from "../../../assets/gundamDateset/002/가랏조.png";
import 아뉴 from "../../../assets/gundamDateset/002/아뉴.png";
import 가데스 from "../../../assets/gundamDateset/002/가데스.png";

const Gundam002 = () => {
  const 셀레스티얼비잉 = [
    {
      MechaImage: 더블오라이저,
      name: "건담 더블오라이저",
      PilotImage: 세츠나,
      subtitle: "세츠나 F. 세이에이",
    },
    {
      MechaImage: 켈딤,
      name: "건담 켈딤",
      PilotImage: 록온,
      subtitle: "록온 스트라토스",
    },
    {
      MechaImage: 아리오스,
      name: "건담 아리오스",
      PilotImage: 알렐루야,
      subtitle: "알렐루야 햅티즘",
    },
    {
      MechaImage: 아쳐,
      name: "GN - 아쳐",
      PilotImage: 소마,
      subtitle: "마리 파파시 (소마 필리스)",
    },
    {
      MechaImage: 세라비,
      name: "건담 세라비",
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
      MechaImage: 리본즈건담,
      name: "리본즈 건담",
      PilotImage: 리본즈,
      subtitle: "이노베이터 / 리본즈 알마크",
    },
    {
      MechaImage: 가랏조힐링,
      name: "가랏조 힐링기",
      PilotImage: 힐링,
      subtitle: "이노베이터 / 힐링 케어",
    },
    {
      MechaImage: 가랏조,
      name: "가랏조 브링기",
      PilotImage: 브링,
      subtitle: "이노베이터 / 브링 스테비티",
    },
    {
      MechaImage: 가뎃사,
      name: "가뎃사",
      PilotImage: 리바이브,
      subtitle: "이노베이터 / 리바이브 리바이벌",
    },
    {
      MechaImage: 가데스,
      name: "가데스",
      PilotImage: 아뉴,
      subtitle: "이노베이터 / 아뉴 리터너",
    },
    {
      MechaImage: 아르케,
      name: "아르케 건담",
      PilotImage: 아리알,
      subtitle: "이노베이터(용병) / 아리알 서셰스",
    },
    {
      MechaImage: 스사노오,
      name: "스사노오",
      PilotImage: 미스터,
      subtitle: "어로우즈 / 미스터 무사도",
    },
    {
      MechaImage: 징크스,
      name: "GN-X III",
      PilotImage: 안드레이,
      subtitle: "어로우즈 / 안드레이 스밀노프",
    },
  ];
  const introductionText = `
A.D 2300 
`;
  return (
    <>
      <IntroduceLayout
        title="기동전사 건담 00 2부"
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

export default Gundam002;
