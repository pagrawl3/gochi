import React from 'react';
import './Icon.scss';

function Icon ({ source }) {

    return (
        <div className='icon'>
            <img src={source} alt="settings-icon" className='icon-image'/>
        </div>        
    )
}

export default Icon;