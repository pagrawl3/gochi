import React from 'react';
import './TabBar.scss';

import TabItem from './components/TabItem';
import Filter from './components/Filter';

function TabBar () {
    return (
        <div className='tabBar'>
            
            <div className='tabBar-column lhs'>
                <TabItem name='ALL(19)'/>
                <TabItem name='INCOMING(3)'/>
                <TabItem name='IN PROGRESS(4)'/>
                <TabItem name='COMPLETE(12)' excludeMargin={true}/>
            </div>

            <div className='tabBar-column rhs'>
                <Filter name='sorted by time remaining'/>
            </div>

        </div>
    )
}

export default TabBar;