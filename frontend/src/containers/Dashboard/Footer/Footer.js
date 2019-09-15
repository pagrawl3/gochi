import React from "react";
import "./Footer.scss";

import Context from '../../../components/Context';
import FooterItem from './components/FooterItem';

function Footer() {  
  const { categories } = React.useContext(Context);
  
  return ( 
    <div className="Footer">
      {categories.map((categoryItem, i) => {            
        return (
          <FooterItem                    
            name={categoryItem.title}
            dotColor={categoryItem.color}                    
          />
        )
      })}      
    </div>
  );
}

export default Footer;