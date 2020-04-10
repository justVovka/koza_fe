import React, {Component} from "react";

import "./header.sass";
import logo from "./tmp_logo.png";
import HeaderMenu from "../header-menu";

class Header extends Component {

    state = {
        menuIsHidden: false,
        searchInputIsHidden: true
    };

    onToggleMenu = () => {
        this.setState(({menuIsHidden}) => {
            return {
                menuIsHidden: !menuIsHidden
            }
        });
    };

    onToggleSearchInput = () => {
        this.setState(({searchInputIsHidden}) => {
            return {
                searchInputIsHidden: !searchInputIsHidden
            }
        });
    };

    render() {
        const {searchInputIsHidden} = this.state;
        const searchInputClasses = searchInputIsHidden ? "search-input hidden" : "search-input";
        return (
            <React.Fragment>
                <header className="header">
                    <div className="logo">
                        <a href="/" className="logo__img">
                            <img src={logo} alt="koza parad"/>
                        </a>
                    </div>
                    <div className="toggle-menu" onClick={this.onToggleMenu}>
                        <i className="fas fa-bars"/>
                    </div>
                    <HeaderMenu menuIsHidden={this.state.menuIsHidden}
                                onToggleSearcInput={this.onToggleSearchInput}
                    />
                </header>
                <div className={searchInputClasses}>
                    <input type="searct" placeholder="Искать..."/>
                </div>
            </React.Fragment>

        );
    }
}

export default Header;