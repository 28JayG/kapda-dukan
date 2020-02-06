import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../componets/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

import "./shop-page.scss";

const ShopPage = ({ match }) => (
  <div className={"shop-page"}>
    <Route path={`${match.path}`} exact component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
