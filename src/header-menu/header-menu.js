import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./header-menu.sass"
import UserMenu from "../user-menu";

class HeaderMenu extends Component {

    state = {
        userMenuIsHidden: true
    };

    onToggleUserMenu = () => {
        this.setState(({userMenuIsHidden}) => {
            return {
                userMenuIsHidden: !userMenuIsHidden
            }
        });
    };

    render() {
        const { menuIsHidden } = this.props;


        return (
            <React.Fragment>
                <div className="main-menu" hidden={menuIsHidden}>
                    <nav className="header-nav">
                        <ul className="menu">
                            <li className="menu__item">
                                <Link to="/charts">Чарты</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/music">Koza.FM</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/video">Koza.TV</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="user-block" hidden={menuIsHidden}>
                    <div className="user-block__search" onClick={this.props.onToggleSearcInput}>
                        <i className="fas fa-search"/>
                    </div>
                    <div className="user-block__notifications"><i className="far fa-bell"/></div>
                    <div className="user-block__details" onClick={this.onToggleUserMenu}>
                        <i className="fas fa-user-alt"/>Рок_Аттряд
                    </div>
                    <UserMenu isHidden={this.state.userMenuIsHidden}/>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderMenu;