import React from "react";
import "./style/Footer.css";
import FooterContent from './components/FooterContent';
import FooterValve from './components/FooterValve';

const Footer = () => {
    return (
        <div className="Footer">
            <FooterContent/>
            <FooterValve />
        </div>
    );
};

export default Footer;