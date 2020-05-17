import React from "react";

import "./CollectionItem.scss";

type CollectionItemProps = {
  // id: number;
  key?: number;
  name: string;
  price: number;
  imageUrl: string;
};

const CollectionItem: React.FC<CollectionItemProps> = ({  key, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
