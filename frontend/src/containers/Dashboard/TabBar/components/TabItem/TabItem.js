import React from 'react';
import './TabItem.scss';


function TabItem ({name, active, onClick}) {
    const activeClassName = active ? 'active' : '';
    return (        
        <div onClick={onClick} className={`TabItem ${activeClassName}`}>
            <div className='TabItem-name'>{name}</div>
            <div className='TabItem-bar'></div>
        </div>
    )
}

export default TabItem;