/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Dashboard.scss";
import "../../_reset.scss";

import API from "../../api";
import Context from "../../components/Context";
import Header from "../../components/Header";
import TabBar from "./TabBar";
import Table from "./Table";
import Footer from "./Footer";

function Dashboard({ id }) {
  const { setState, emails } = React.useContext(Context);
  React.useEffect(() => {
    const apiCalls = [
      API.getDashboard(id),
      API.getEmails(id)
    ];

    Promise.all(apiCalls).then(([{ categories, statuses }, emails]) => {
      setState({ categories, statuses, emails });
    });
  }, [id]);

  return (
    <div className="dashboard">
      <Header title="GOCHI DASHBOARD" subtitle="platform.support@haptik.ai" />
      <TabBar emails={emails}/>
      <Table emails={emails} />
      <Footer />
    </div>
  );
}

Dashboard.defaultProps = {
  id: "5d7cc9566455590e63a4968e"
};

export default Dashboard;
