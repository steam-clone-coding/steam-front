import React from 'react';
import "./styles/DropDownCommunity.css";

const DropDownCommunity = ({setHandleHover}) => {
    return (
        <div className="DropDownCommunity"
        onMouseEnter={()=>setHandleHover("커뮤니티")}
        onMouseLeave={()=>setHandleHover("마우스아웃")}>
            <div className="subMenu">홈</div>
            <div className="subMenu">토론</div>
            <div className="subMenu">창작마당</div>
            <div className="subMenu">장터</div>
            <div className="subMenu">방송</div>
        </div>
    );
};

export default DropDownCommunity;