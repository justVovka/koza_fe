import React, {Component} from "react";

import "./toggle-menu-icon.sass";

class ToggleMenuIcon extends Component {

    render() {
        return (
            <div className="toggle-menu" onClick={this.props.onToggleMenu}>
                <i className="fas fa-bars"/>
            </div>
        );
    }
}

export default ToggleMenuIcon;