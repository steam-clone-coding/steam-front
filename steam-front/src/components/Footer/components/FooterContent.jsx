import React from 'react';
import "./styles/FooterContent.css";

const FooterContent = () => {
    return (
        <div className="FooterContent">
            <div id="footerLogo">
                <img src="https://store.cloudflare.steamstatic.com/public/images/footerLogo_valve_new.png" alt="footerLogo" id="footerLogoImg" />
            </div>
            <div id="footerText">
                <div style={{"color": "#8F98A0"}}>© 2023 Valve Corporation. All rights reserved. 모든 상표는 미국 및 기타 국가에서 해당하는 소유자의 재산입니다.</div>
                <div id="footerTerm">
                    <p>부가가치세 포함&nbsp;&nbsp;</p>
                    <p>개인정보 보호정책&nbsp; | &nbsp;</p>
                    <p>사용권&nbsp; | &nbsp;</p>
                    <p>Steam 이용 약관&nbsp; | &nbsp;</p>
                    <p>환불&nbsp; | &nbsp;</p>
                    <p>쿠키</p>
                </div>
            </div>
            <div id="footerSteamLogo">
                <img src="https://store.cloudflare.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="footerSteamLogo" id="footerSteamLogoImg" />
            </div>
        </div>
    );
};

export default FooterContent;