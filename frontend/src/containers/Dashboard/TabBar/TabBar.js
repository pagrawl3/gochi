import React from 'react';
import './TabBar.scss';

import CategoryItem from './components/CategoryItem';
import Filter from './components/Filter';

function TabBar () {
    return (
        <div className='tabBar'>
            
            <div className='tabBar-column lhs'>
                <CategoryItem name='ALL(19)'/>
                <CategoryItem name='INCOMING(3)'/>
                <CategoryItem name='IN PROGRESS(4)'/>
                <CategoryItem name='COMPLETE(12)' excludeMargin={true}/>
            </div>

            <div className='tabBar-column rhs'>
                <Filter/>
            </div>

        </div>
        
        
    )
}

export default TabBar;