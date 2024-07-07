import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import { useMatch, useNavigate } from 'react-router-dom';

const CollectionPreview = ({ items, title, routeName }) => {
  const navigate = useNavigate();
  const match = useMatch();

  console.log({ routeName });

  return (
    <div className='collection-preview'>
      <h1
        className='title'
        // onClick={() => navigate(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
