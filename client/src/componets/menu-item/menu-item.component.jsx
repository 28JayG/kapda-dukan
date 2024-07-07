import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className='background-image'
      />
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
