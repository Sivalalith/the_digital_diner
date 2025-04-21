import React from "react";
import Title from "../components/Title";
import CartIndicator from "../components/CartIndicator";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((appStore) => appStore.cart.items);
  return (
    <div className="flex items-center justify-between py-2 my-2">
      <Link to="/">
        <Title />
      </Link>
      <Link to="/cart">
        <CartIndicator cartCount={cartItems.length} />
      </Link>
    </div>
  );
};

export default Header;
