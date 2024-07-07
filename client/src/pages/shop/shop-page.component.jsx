import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shops.actions';

import './shop-page.styles.scss';
import CollectionsOverviewContainer from '../../componets/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className={'shop-page'}>
      <Route path={`/`} element={<CollectionsOverviewContainer />} />
      <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
