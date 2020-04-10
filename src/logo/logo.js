import React from "react";
import logo from "./tmp_logo.png";

import "./logo.sass";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="logo__img">
                <img src={logo} alt="koza parad"/>
            </Link>
        </div>
    );
};

export default Logo;