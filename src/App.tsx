import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import HeaderComponent from "./components/header/HeaderComponent";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  let unsubscribeFromAuth: any = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef: any = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot: any) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log('snapShot curre', currentUser);
        });
        console.log('snapShot curre out', currentUser);
      }
      setCurrentUser(userAuth);
      console.log('userAuth', userAuth);
      console.log('userAuth rrr', currentUser);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <HeaderComponent currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
