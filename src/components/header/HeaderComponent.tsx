import React, { useContext } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import "./HeaderComponent.scss";

interface HeaderComponentProps {
  currentUser: any,
  hidden: any
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ currentUser, hidden }) => {

  return (
        <div className="header">
          <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
          </Link>
          <div className="options">
            <Link className="option" to="/shop">
              SHOP
            </Link>
            <Link className="option" to="/contact">
              CONTACT
            </Link>
            {currentUser ? (
              <div className="option" onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            ) : (
              <Link className="option" to="/signin">
                SIGN IN
              </Link>
            )}
            <CartIcon />
          </div>
          {hidden ? null : <CartDropdown />}
        </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderComponent);
