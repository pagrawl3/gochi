import React from 'react';
import './Header.scss';

function Header ({ title, subtitle}) {
    return (
        <div className='header'>

            <div className='header-column lhs'>
                <div className='header-column-title'>{title}</div>
                <div className='header-column-subtitle'>{subtitle}</div>
            </div>

            <div className='header-column rhs'>
                
            </div>

        </div>
    )
}

export default Header;