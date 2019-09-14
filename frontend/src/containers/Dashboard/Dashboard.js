import React from 'react';
import './Dashboard.scss';
import '../../_reset.scss';

import API from '../../api';
import Header from '../../components/Header';
import TabBar from './TabBar';
import Table from './Table';

function Dashboard({ id }) {
  React.useEffect(() => {
    API.getDashboard(id).then(console.log);
  }, [id]);

  return (
    <div className="dashboard">
      <Header title="ON CALL DASHBOARD" subtitle="platform.support@haptik.ai" />
      <TabBar />
      <Table />
    </div>
  );
}

Dashboard.defaultProps = {
  id: '5d7cc9566455590e63a4968e'
};

export default Dashboard;
