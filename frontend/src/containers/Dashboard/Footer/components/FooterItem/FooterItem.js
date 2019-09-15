import React from "react";
import "./FooterItem.scss";

import CategoryDot from '../../../../../components/CategoryDot';

function FooterItem({dotColor, name}) {
  return (
    <div className="FooterItem">
        <CategoryDot className='FooterItem-dot' color={dotColor}/>
        <div className='FooterItem-name'>{name}</div>
    </div>
  );
}

export default FooterItem;