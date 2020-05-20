import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import "./CheckoutPage.scss";

interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CheckoutPageProps {
  // cartItem: IItem[],
  cartItems?: any,
  total: any
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, total }) => {

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      <div className="total">
        <span>Total : ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

