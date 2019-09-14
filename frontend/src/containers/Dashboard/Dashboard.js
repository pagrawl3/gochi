import React from 'react';
import Header from '../../components/Header';
import './Dashboard.scss';
import '../../_reset.scss';

function Dashboard () {
    return (
        <div className='dashboard'>
            <Header title='ON CALL DASHBOARD' subtitle='platform.support@haptik.ai'/>
        </div>
    )
}

export default Dashboard;
