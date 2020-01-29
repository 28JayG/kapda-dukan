import React from "react";

import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="image"
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton inverted> Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
