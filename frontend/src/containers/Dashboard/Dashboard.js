import React from 'react';
import './Dashboard.scss';
import '../../_reset.scss';

import Header from '../../components/Header';
import TabBar from './TabBar';

function Dashboard () {
    return (
        <div className='dashboard'>
            <Header title='ON CALL DASHBOARD' subtitle='platform.support@haptik.ai'/>
            <TabBar/>
        </div>
    )
}

export default Dashboard;
