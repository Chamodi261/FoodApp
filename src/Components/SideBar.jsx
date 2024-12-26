import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ links, close }) => {
  const location = useLocation();
  
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <Link 
          to={link.path} 
          className={location.pathname === link.path ? "slidebar_link active" : "slidebar_link"} 
          key={link.name}
        >
          {link.icon && <FontAwesomeIcon icon={link.icon} />}
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
