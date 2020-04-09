import React, {Component} from "react";

import "./header.sass";
import logo from "./tmp_logo.png";
import HeaderMenu from "../header-menu";

class Header extends Component {

    state = {
        menuIsHidden: false
    };

    onToggleMenu = () => {
        this.setState(({menuIsHidden}) => {
            return {
                menuIsHidden: !menuIsHidden
            }
        });
    };

    render() {
        return (
            <header className="header">
                <div className="logo">
                    <a href="/" className="logo__img">
                        <img src={logo} alt="koza parad"/>
                    </a>
                </div>
                <div className="toggle-menu" onClick={this.onToggleMenu}>
                    <i className="fas fa-bars"/>
                </div>
                <HeaderMenu menuIsHidden={this.state.menuIsHidden} />
            </header>
        );
    }
}

export default Header;