import { useNavigate } from "react-router-dom";
import "../App.css";

function Cart({ cartItems }) {
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <h2>Giỏ hàng trống</h2>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />
          <p>
            {item.name} - ${item.price} x {item.quantity}
          </p>
        </div>
      ))}

      <button onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
