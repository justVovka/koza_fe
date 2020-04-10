import React, {Component} from "react";

import "./user-menu.sass";

class UserMenu extends Component {

    render() {
        const { isHidden } = this.props;
        const userMenuClasses = isHidden ? "user-menu hidden" : "user-menu";

        return (
            <div className={userMenuClasses}>
                <ul>
                    <li className="user-menu__item"><a href="">Профиль</a></li>
                    <li className="user-menu__item"><a href="">Настройки</a></li>
                    <li className="user-menu__item"><a href="">Статистика</a></li>
                    <li className="user-menu__item underline"><a href="">Выйти</a></li>
                </ul>
            </div>
        );
    }
}

export default UserMenu;