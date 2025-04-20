import React from "react";

const CartIndicator = ({ cartCount }) => {
  return (
    <div>
      <p className="py-2 my-2 px-4 mx-4 text-2xl font-bold ">
        Cart 🛒 - {cartCount}
      </p>
    </div>
  );
};

export default CartIndicator;
