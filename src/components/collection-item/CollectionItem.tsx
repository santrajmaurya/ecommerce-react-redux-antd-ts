import React from "react";
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import "./CollectionItem.scss";

interface IItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CollectionItemProps {
  item: IItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {

  const { name, price, imageUrl } = item;

  return (
        <div className="collection-item">
          <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
          </div>
          <button
            onClick={() => addItem(item)}
            className="custom-button"
            type="submit"
          >
            Add to cart
          </button>
        </div>
  );
};

const mapDispatchToProps = (dispatch : any) => ({
  addItem: (item: any) => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);

