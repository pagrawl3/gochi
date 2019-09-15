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
  const { setState } = React.useContext(Context);
  React.useEffect(() => {
    API.getDashboard(id).then(data => {
      const { categories, statuses } = data;
      setState({ categories, statuses });
    });
  }, [id]);

  return (
    <div className="dashboard">
      <Header title="ON CALL DASHBOARD" subtitle="platform.support@haptik.ai" />
      <TabBar />
      <Table />
      <Footer />
    </div>
  );
}

Dashboard.defaultProps = {
  id: "5d7cc9566455590e63a4968e"
};

export default Dashboard;
