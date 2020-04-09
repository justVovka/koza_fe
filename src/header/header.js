import React from "react";

import "./header.sass";
import logo from "./tmp_logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/" className="logo__img">
                    <img src={logo} alt="koza parad"/>
                </a>
            </div>
            <div className="toggle-menu">
                <i className="fas fa-bars"></i>
            </div>
            <div className="main-menu">
                <nav className="header-nav">
                    <ul className="menu">
                       <li className="menu__item"><a href="">Чарты</a></li>
                       <li className="menu__item"><a href="">Koza.FM</a></li>
                       <li className="menu__item"><a href="">Koza.TV</a></li>
                    </ul>
                </nav>
            </div>
            <div className="user-block">
                <div className="user-block__search"><i className="fas fa-search"></i></div>
                <div className="user-block__notifications"><i className="far fa-bell"></i></div>
                <div className="user-block__details"><i className="fas fa-user-alt"></i>Вход / Регистрация</div>
            </div>
        </header>
    );
};

export default Header;