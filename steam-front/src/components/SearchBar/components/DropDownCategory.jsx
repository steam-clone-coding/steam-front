import React from "react";
import "./styles/DropDownCategory.css";

const DropDownCategory = ({ setSearchHover }) => {
  const specialData = [
    "무료",
    "체험판",
    "앞서 해보기",
    "Steam Deck",
    "Deck 완벽 호환",
    "컨트롤러 지원",
    "Remote Play",
    "VR 게임",
    "VR 하드웨어",
    "소프트웨어",
    "사운드트랙",
    "macOS",
    "SteamOS + Linux",
    "PC방용",
  ];

  const genreData = [
    "액션",
    "롤플레잉",
    "전략",
    "1인칭 슈팅",
    "JRPG",
    "군사",
    "3인칭 슈팅",
    "로그라이크",
    "대전략 및 4X",
    "격투 및 무술",
    "액션 RPG",
    "도시 및 정착",
    "슛뎀업",
    "어드벤처 RPG",
    "실시간 전략",
    "아케이드 및 리듬",
    "전략 RPG",
    "카드 및 보드",
    "플랫폼 게임 및 러너",
    "턴제 RPG",
    "타워 디펜스",
    "핵 앤 슬래시 게임",
    "파티 기반",
    "턴제 전략",
    "어드벤처",
    "시물레이션",
    "스포츠 및 레이싱",
    "메트로배니아",
    "건설 및 자동화",
    "개별 스포츠",
    "비주얼 노벨",
    "농업 및 제작",
    "낚시 및 사냥",
    "어드벤처 RPG",
    "샌드박스 및 물리",
    "레이싱",
    "캐주얼",
    "생활 및 몰입형",
    "레이싱 시뮬레이션",
    "퍼즐",
    "연애",
    "모든 스포츠",
    "풍부한 스토리",
    "우주 및 비행",
    "스포츠 시뮬레이션",
    "히든 오브젝트",
    "취미 및 직업",
    "팀 스포츠",
  ];

  const themaData = [
    "공상과학 및 사이버펑크",
    "공포",
    "미스터리 및 수사관",
    "생존",
    "애니메이션",
    "오픈 월드",
    "우주",
  ];
  const playerSupportData = [
    "LAN",
    "MMO",
    "로컬 및 파티",
    "멀티플레이어",
    "싱글 플레이어",
    "온라인 경쟁",
    "협동",
  ];

  return (
    <div
      className="DropDownCategory"
      onMouseEnter={() => setSearchHover("카테고리")}
      onMouseLeave={() => setSearchHover("마우스아웃")}
    >
      <div className="dropDownCategory-Special">
        <div className="categoryMenu-Title">특별 섹션</div>
        {specialData.map((value, index) => (
          <div key={index}>
            <div className="categoryMenu">{value}</div>
            {index % 2 === 0 && 0 < index && index < 12 ? (
              <div className="categoryMenu-Line-Horizontal"></div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <div className="categoryMenu-Line-Vertical"></div>
      <div className="dropDownCategory-Genre">
        <div className="categoryMenu-Title">장르</div>
        <div className="categoryMenu-Genre">
          {genreData.map((value, index) => (
            <div
              className={
                "categoryMenu" +
                (index === 21 || index === 22 || index === 23 ? " blank" : "")
              }
              key={index}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="categoryMenu-Line-Vertical"></div>
      <div className="dropDownCategory-Thema">
        <div className="categoryMenu-Thema">
          <div className="categoryMenu-Title">테마</div>
          {themaData.map((value, index) => (
            <div className="categoryMenu">{value}</div>
          ))}
        </div>
        <div className="categoryMenu-playerSupport">
          <div className="categoryMenu-Title">플레이어 지원</div>
          {playerSupportData.map((value, index) => (
            <div className="categoryMenu">{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownCategory;
