import React from 'react';
import "./styles/ActionMenu.css";

const ActionMenu = () => {
    return (
        <div className="ActionMenu">
            <button id="installBtn">Steam 설치</button>
            <span className="acMenu possibleMenu">로그인</span>
            <span className="acMenu">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span className="acMenu possibleMenu">언어 ▼</span>
        </div>
    );
};

export default ActionMenu;