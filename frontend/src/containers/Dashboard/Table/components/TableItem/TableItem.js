import React from 'react';
import './TableItem.scss';


function TableItem ({title, subject, senderName, category, status, timeremaining}) {
    return (        
        <div className='tableItem'>
            
            <div className='tableItem-column lhs'>
                <div className='tableItem-column-accessory'></div>
                <div className='tableItem-column-labelsContainer'>
                    <div className='tableItem-column-labelsContainer-titleContainer'>
                        {/* Category Dot */}
                        <div className='tableItem-column-labelsContainer-titleContainer-category'></div>
                        {/* Email Title */}
                        <div className='tableItem-column-labelsContainer-titleContainer-title'>
                            {title}
                        </div> 
                    </div> 
                    {/* Concatinate SenderName: Email Subject */}
                    <div className='tableItem-column-labelsContainer-subject'>
                        {subject}
                    </div>
                 </div>                
            </div>

            <div className='tableItem-column rhs'>
                {/* Status Copy */}
                <div className='tableItem-column-status'>
                    {status}
                </div>
                {/* SLA Time Remaining Copy */}
                <div className='tableItem-column-remainingTime'>
                    {timeremaining}
                </div>
            </div>
        </div>
    )
}
export default TableItem;