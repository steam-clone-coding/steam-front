import React from 'react';
import "./styles/DropDownStore.css";

const DropDownStore = ({setHandleHover}) => {

    return (
        <div className="DropDownStore"
        onMouseEnter={()=>setHandleHover("상점")}
        onMouseLeave={()=>setHandleHover("마우스아웃")}>
            <div className="subMenu">홈</div>
            <div className="subMenu">탐색 대기열</div>
            <div className="subMenu">찜 목록</div>
            <div className="subMenu">포인트 상점</div>
            <div className="subMenu">뉴스</div>
            <div className="subMenu">통계</div>
        </div>
    );
};

export default DropDownStore;