import React from 'react';
import './CategoryItem.scss';


function CategoryItem ({name, excludeMargin}) {

    let excludeRightMargin = excludeMargin ? 'exclude' : '';

    return (        
        <div className={`categoryItem ${excludeRightMargin}`}>
            <div className='categoryItem-name'>{name}</div>
            <div className='categoryItem-bar'></div>
        </div>
    )
}

export default CategoryItem;