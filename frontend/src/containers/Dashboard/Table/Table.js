import React from "react";
import "./Table.scss";

import "./components/TableItem";
import TableItem from "./components/TableItem";

function Table() {
  return (
    <div className="table">
      <TableItem
        title="Feature Request <> Reassign Chats as feature in permissions"
        subject="Reassign chat on 'My Chats' page is currently available to all permission groups with access to Athena Chat. However, we have received a request…"
        senderName="Suraj"
        status="First response needed"
        timeremaining="8 Minutes remaining"
      />
    </div>
  );
}

export default Table;
