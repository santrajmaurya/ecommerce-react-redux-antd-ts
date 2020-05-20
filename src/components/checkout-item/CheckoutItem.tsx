import React from "react";
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import "./CheckoutItem.scss";

interface IItem {
  id?: number;
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
}

interface CheckoutItemProps {
  cartItem: IItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (

    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
          </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: any) => dispatch(clearItemFromCart(item)),
  addItem: (item: any) => dispatch(addItem(item)),
  removeItem: (item: any) => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

