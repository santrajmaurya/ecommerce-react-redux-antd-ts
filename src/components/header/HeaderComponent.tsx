import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from '../../firebase/firebase.utils';

import "./HeaderComponent.scss";


interface HeaderComponentProps {
    currentUser?: firebase.User | null; 
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ currentUser }) => {

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
        {
            currentUser ? 
                      <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
                      <Link className="option" to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  );
};

export default HeaderComponent;
