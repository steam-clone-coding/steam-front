import React,{useState} from 'react';
import "./styles/NavBar.css";
import DropDownStore from './DropDownStore';
import DropDownCommunity from './DropDownCommunity';

const NavBar = () => {
    const [navActive,setNavActive] = useState("");
    const [handleHover,setHandleHover] = useState("");

    const navData = ["상점","커뮤니티","정보","지원"];
    const dropDownStore = ["홈","탐색 대기열","찜 목록","포인트 상점","뉴스","통계"];
    const dropDownCommunity = ["홈","토큰","창작마당","장터","방송"];
    const dropDown = {
        상점 : dropDownStore,
        커뮤니티 : dropDownCommunity,
        정보:"none",
        지원:"none",
        마우스아웃:"none"
    };

    // 추후에는 props로 NavData가 무엇인지 받아와서 State관리할 예정
    // App.jsx에서 Header를 하나로 관리하는 방식으로 가능할지?
    const toggleActive = (e) => {
        setNavActive(e.target.textContent);
    };

    return (
        <>
        <div className="NavBar">
            {
                navData.map((value,index)=>{
                    return(
                        <>
                            <p 
                            key={index} 
                            value={value}
                            className={"nav"+(value===navActive ?" active":"")}
                            onClick={toggleActive}
                            onMouseEnter={()=>setHandleHover(value)}
                            onMouseLeave={()=>setHandleHover("마우스아웃")}>
                                {value}
                            </p>
                            
                        </>
                        
                    )
                })
            }
            {
                (dropDown[handleHover] === "none")?"":
                (dropDown[handleHover] === dropDownStore)?
                <DropDownStore setHandleHover={setHandleHover}
                />:
                (dropDown[handleHover] === dropDownCommunity)?
                <DropDownCommunity setHandleHover={setHandleHover}/>
                :""
            }
        </div>

        </>
    );
};

export default NavBar;