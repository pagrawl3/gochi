import React from "react";
import "./Table.scss";

import "./components/TableItem";
import TableItem from "./components/TableItem";

function Table({ emails, categories }) {
  return (
    <div className="table">
      {
        emails.map((item) => 
          <TableItem
            title={item.subject}
            subject={item.snippet}
            senderName="Suraj"
            status="First response needed"
            date="09/14/19 23:59:00"
            categoryId="5d7cc9566455590e63a49686"
            categories={categories}
            id={item._id}
          />)
      }
    </div>
  );
}

Table.defaultProps = {
  emails: [],
}

export default Table;
