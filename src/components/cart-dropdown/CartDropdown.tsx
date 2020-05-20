import React, { useContext } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import "./CartDropdown.scss";

interface CartDropdownProps  {
  cartItems: any,
  dispatch: any
}

const CartDropdown: React.FC<CartDropdownProps & RouteComponentProps> = ({ history, cartItems, dispatch }) => {

  return (
    
        <div className="cart-dropdown">
          <div className="cart-items">
            { cartItems.length ? (
              cartItems.map((cartItem:any) => (
              <CartItem key={cartItem.id } item={cartItem}/>
            ))
          ) : (
            <span className='empty-message'>Your cart is empty.</span>
          )}
          </div>
          <button className="custom-button" onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}>
            GO TO CHECKOUT
            </button>
        </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
