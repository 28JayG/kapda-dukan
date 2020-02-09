import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../componets/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import "./shop-page.styles.scss";

const ShopPage = ({ match }) => (
  <div className={"shop-page"}>
    <Route path={`${match.path}`} exact component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
