import React from "react";
import SHOP_DATA from "../../dummy-data/shop.data";
import CollectionPreview from "../../componets/collection-preview/collection-preview";

import "./shop-page.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className={"shop-page"}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
