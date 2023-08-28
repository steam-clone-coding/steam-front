import React from 'react';
import "../Header/style/Header.css";
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import ActionMenu from './components/ActionMenu';

const Header = ({navActive,setNavActive}) => {
    return (
        <div className="Header">
            <div className="Contents HeaderContents">
                <Logo/>
                <NavBar/>
                <ActionMenu/>
            </div>
        </div>
    );
};

export default Header;