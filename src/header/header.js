import React, {Component} from "react";

import "./header.sass";
import HeaderMenu from "../header-menu";
import Logo from "../logo";
import ToggleMenuIcon from "../toggle-menu-icon";
import InputSearchPanel from "../input-search-panel/input-search-panel";

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
        return (
            <React.Fragment>
                <header className="header">
                    <Logo/>
                    <ToggleMenuIcon onToggleMenu={this.onToggleMenu} />
                    <HeaderMenu menuIsHidden={this.state.menuIsHidden}
                                onToggleSearcInput={this.onToggleSearchInput}
                    />
                </header>
                <InputSearchPanel isHidden={this.state.searchInputIsHidden}/>
            </React.Fragment>
        );
    }
}

export default Header;