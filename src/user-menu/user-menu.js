import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./user-menu.sass";

class UserMenu extends Component {

    render() {
        const { isHidden } = this.props;
        const userMenuClasses = isHidden ? "user-menu hidden" : "user-menu";

        return (
            <div className={userMenuClasses}>
                <ul>
                    <li className="user-menu__item">
                        <Link to="/profile">Профиль</Link>
                    </li>
                    <li className="user-menu__item">
                        <Link to="/settings">Настройки</Link>
                    </li>
                    <li className="user-menu__item">
                        <Link to="/statistic">Статистика</Link>
                    </li>
                    <li className="user-menu__item underline">
                        <Link to="/quit">Выйти</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserMenu;