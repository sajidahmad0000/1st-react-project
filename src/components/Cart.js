import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import CartTotal from "./CartTotal";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1 className=" text-center p-2 m-2  font-extrabold text-2xl  ">Cart</h1>
      {cartItems.length === 0 && (
        <h1 className="m-3 p-3 font-semibold text-center">
          Cart is empty, Add items to the cart.
        </h1>
      )}
      <div className="w-5/12 mx-10 ">
        <button
          onClick={handleClearCart}
          className="bg-black text-white rounded-md p-1 mx-1"
        >
          Clear Cart
        </button>
        <div className=" bg-yellow-400 rounded-lg ">
          <ItemsList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
