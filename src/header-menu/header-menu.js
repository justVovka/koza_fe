import React, {Component} from "react";

import "./header-menu.sass"

class HeaderMenu extends Component {

    render() {
        const { menuIsHidden } = this.props;

        return (
            <React.Fragment>
                <div className="main-menu" hidden={menuIsHidden}>
                    <nav className="header-nav">
                        <ul className="menu">
                            <li className="menu__item"><a href="">Чарты</a></li>
                            <li className="menu__item"><a href="">Koza.FM</a></li>
                            <li className="menu__item"><a href="">Koza.TV</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-block" hidden={menuIsHidden}>
                    <div className="user-block__search"><i className="fas fa-search"/></div>
                    <div className="user-block__notifications"><i className="far fa-bell"/></div>
                    <div className="user-block__details"><i className="fas fa-user-alt"/>Вход / Регистрация</div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderMenu;