import React from 'react';
import './TabItem.scss';


function TabItem ({name, excludeMargin}) {

    let excludeRightMargin = excludeMargin ? 'exclude' : '';

    return (        
        <div className={`TabItem ${excludeRightMargin}`}>
            <div className='TabItem-name'>{name}</div>
            <div className='TabItem-bar'></div>
        </div>
    )
}

export default TabItem;