import React from "react";
import logo from "./tmp_logo.png";

import "./logo.sass";

const Logo = () => {
    return (
        <div className="logo">
            <a href="/" className="logo__img">
                <img src={logo} alt="koza parad"/>
            </a>
        </div>
    );
};

export default Logo;