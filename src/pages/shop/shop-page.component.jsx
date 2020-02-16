import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsyn } from "../../redux/shop/shops.actions";

import "./shop-page.styles.scss";
import CollectionsOverviewContainer from "../../componets/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsyn } = this.props;
    fetchCollectionsStartAsyn();
  }

  render() {
    const { match } = this.props;

    return (
      <div className={"shop-page"}>
        <Route
          path={`${match.path}`}
          exact
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsyn: () => dispatch(fetchCollectionsStartAsyn())
});

export default connect(null, mapDispatchToProps)(ShopPage);
