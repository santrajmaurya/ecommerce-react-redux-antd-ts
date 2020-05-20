import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./CartIcon.scss";

interface CartIconProps {
  toggleCartHidden: any,
  itemCount: any,
  dispatch?: any
}
const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount, dispatch }) => {

  return (

    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={toggleCartHidden}
      />
      <span className="item-count">{itemCount}</span>
    </div>

  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
