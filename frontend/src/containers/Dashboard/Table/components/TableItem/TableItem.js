import React from 'react';
import './TableItem.scss';


function TableItem ({name}) {
    return (        
        <div className='tableItem'>
            
            <div className='tableItem-column lhs'>

                <div className='tableItem'></div>
                
            </div>

            <div className='tableItem-column rhs'>

                <div className='tableItem-column'></div>

            </div>

        </div>
    )
}
export default TableItem;