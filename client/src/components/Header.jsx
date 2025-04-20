import React from "react";
import Title from "../components/Title";
import CartIndicator from "../components/CartIndicator";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 my-2">
      <Title />
      <CartIndicator cartCount={5} />
    </div>
  );
};

export default Header;
