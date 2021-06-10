import "./App.css";
import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "../src/components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartItems = () => {
    setCartIsShown(true);
  };

  const hideCartItems = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartItems} />}
      <Header onShowCart={showCartItems} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
