import React from "react";
import "./TabBar.scss";

import Context from "../../../components/Context";
import TabItem from "./components/TabItem";
import Filter from "./components/Filter";

function getName(id, emails, tab) {
  switch (id) {
    case 0:
      return `${tab.title} (${emails.length})`;

    case 1:
      return `${tab.title} (${emails.reduce((sum, email, index) => {
        if (email.status && email.status.includes("First response needed")) {
          return sum + 1;
        } else {
          return sum;
        }
      }, 0)})`;

    case 2:
      return `${tab.title} (${emails.reduce((sum, email, index) => {
        if (
          email.status &&
          (email.status.includes("Follow up") ||
            email.status.includes("Waiting for reply"))
        ) {
          return sum + 1;
        } else {
          return sum;
        }
      }, 0)})`;

    case 3:
      return `${tab.title} (${emails.reduce((sum, email, index) => {
        if (email.resolved) {
          return sum + 1;
        } else {
          return sum;
        }
      }, 0)})`;
  }
}

function TabBar({ tabs, emails }) {
  const { setState, statusFilter } = React.useContext(Context);
  return (
    <div className="tabBar">
      <div className="tabBar-column lhs">
        {tabs.map((tab, i) => {
          return (
            <TabItem
              active={statusFilter === tab._id}
              onClick={() => setState({ statusFilter: tab._id })}
              name={getName(tab._id, emails, tab)}
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
    { title: "ALL", _id: 0 },
    { title: "NOT STARTED", _id: 1 },
    { title: "IN PROGRESS", _id: 2 },
    { title: "COMPLETE", _id: 3 }
  ],

  emails: []
};

export default TabBar;
