import React from "react";
import "./TabBar.scss";

import Context from "../../../components/Context";
import TabItem from "./components/TabItem";
import Filter from "./components/Filter";

function TabBar({ tabs }) {
  const { setState, statusFilter } = React.useContext(Context);
  return (
    <div className="tabBar">
      <div className="tabBar-column lhs">
        {tabs.map((tab, i) => {
          return (
            <TabItem
              active={statusFilter === tab._id}
              onClick={() => setState({ statusFilter: tab._id })}
              name={`${tab.title}(${tab.count})`}
            />
          );
        })}
      </div>

      <div className="tabBar-column rhs">
        <Filter name="sorted by time remaining" />
      </div>
    </div>
  );
}

TabBar.defaultProps = {
  tabs: [
    { title: "ALL", _id: 0, count: 12 },
    { title: "FIRST REPLY NEEDED", _id: 1, count: 1 },
    { title: "TAG NEEDED", _id: 2, count: 2 },
    { title: "FOLLOW UP NEEDED", _id: 3, count: 3 },
    { title: "WAITING FOR REPLY", _id: 4, count: 4 },
    { title: "RESOLVED", _id: 5, count: 5 }
  ]
};

export default TabBar;
