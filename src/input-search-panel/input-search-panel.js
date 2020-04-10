import React, {Component} from "react";

import "./input-search-panel.sass"

class InputSearchPanel extends Component {

    render() {
        const {isHidden} = this.props;
        const searchInputClasses = isHidden ? "search-input hidden" : "search-input";
        return (
            <div className={searchInputClasses}>
                <input type="searct" placeholder="Искать..."/>
            </div>
        );
    }
}

export default InputSearchPanel;