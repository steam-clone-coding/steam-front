import React from "react";
import "./styles/DropDownNew.css";

const DropDownNew = ({ setSearchHover }) => {
  return (
    <div
      className="DropDownNew"
      onMouseEnter={() => setSearchHover("신규 및 특집")}
      onMouseLeave={() => setSearchHover("마우스아웃")}
    >
      <div className="newMenu-Popular">
        <div className="newMenu-Game">
          <div className="newMenu-Title">인기 있는 게임</div>
          <div className="newMenu">최고 인기 제품</div>
          <div className="newMenu">가장 많이 플레이한 제품</div>
          <div className="newMenu-Line-Horizontal "></div>
          <div className="newMenu">신규 출시</div>
          <div className="newMenu">출시 예정</div>
        </div>
        <div className="newMenu-News">
          <div className="newMenu-Title">뉴스 및 업데이트</div>
          <div className="newMenu">최근에 업데이트됨</div>
        </div>
      </div>
      <div className="newMenu-Line-Vertical"></div>
      <div className="newMenu-Promotion">
        <div className="newMenu-Title">프로모션 및 이벤트</div>
        <div className="newMenu">특별 할인</div>
        <div className="newMenu">할인 이벤트</div>
        <div className="newMenu-Line-Horizontal "></div>
        <div className="newMenu">2022년 Steam 돌아보기</div>
        <div className="newMenu">Steam Next Fest</div>
      </div>
    </div>
  );
};

export default DropDownNew;
