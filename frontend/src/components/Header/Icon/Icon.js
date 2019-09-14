import React from 'react';
import './Icon.scss';

function Icon ({ source, excludeMargin }) {

    let excludeRightMargin = excludeMargin ? 'exclude' : '';

    return (
        <div className={`icon ${excludeRightMargin}`}>
            <img src={source} alt="settings-icon" className='icon-image'/>
        </div>        
    )
}

export default Icon;