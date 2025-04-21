import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import Item from "./Item";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // subscribe to store.cart.items
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center flex items-center flex-col">
        <h1 className="font-semibold text-3xl p-4 m-4">Cart</h1>
        <button
          className="p-2 mt-2 mb-4 text-white bg-black rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col items-center">
        <ItemList title="Cart Items" items={cartItems} />
      </div>
    </>
  );
};

export default Cart;
