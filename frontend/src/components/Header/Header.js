import React from "react";
import "./Header.scss";
import Icon from "../Header/Icon";

import settingsIcon from "../../icons/iconPlaceholder.svg";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div className="header-column lhs">
        <div className="header-column-title">{title}</div>
        <div className="header-column-subtitle">{subtitle}</div>
      </div>

      <div className="header-column rhs">
        <Icon source={settingsIcon} />
        <Icon source={settingsIcon} />
        <Icon source={settingsIcon} excludeMargin={true} />
      </div>
    </div>
  );
}

export default Header;
