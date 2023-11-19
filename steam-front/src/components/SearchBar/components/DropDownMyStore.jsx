import React from "react";
import "./styles/DropDownMyStore.css";

const DropDownMyStore = ({ setSearchHover }) => {
  return (
    <div
      className="DropDownMyStore"
      onMouseEnter={() => setSearchHover("내 상점")}
      onMouseLeave={() => setSearchHover("마우스아웃")}
    >
      <div className="myStoreMenu">홈</div>
      <div className="myStoreMenu">커뮤니티 추천 제품</div>
      <div className="myStoreMenu">최근에 본 항목</div>
      <div className="myStoreMenu">Steam 큐레이터</div>
    </div>
  );
};

export default DropDownMyStore;
