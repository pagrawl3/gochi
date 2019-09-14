import React from 'react';
import './Dashboard.scss';
import '../../_reset.scss';

import Header from '../../components/Header';
import TabBar from './TabBar';
import Table from './Table';

function Dashboard () {
    return (
        <div className='dashboard'>
            <Header title='ON CALL DASHBOARD' subtitle='platform.support@haptik.ai'/>
            <TabBar/>
            <Table/>
        </div>
    )
}

export default Dashboard;
