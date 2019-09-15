import React from "react";
import "./Header.scss";
import Icon from "../Header/Icon";

import SearchIcon from "../../icons/search.svg";
import RefreshIcon from "../../icons/refresh.svg";
import SettingsIcon from "../../icons/settings.svg";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div className="header-column lhs">
        <div className="header-column-title">{title}</div>
        <div className="header-column-subtitle">{subtitle}</div>
      </div>
      <div className="header-column rhs">
        <Icon source={SearchIcon} />
        <Icon source={RefreshIcon} />
        <Icon source={SettingsIcon} excludeMargin={true} />
      </div>
    </div>
  );
}

export default Header;
