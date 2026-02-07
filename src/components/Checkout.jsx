import { useNavigate } from "react-router-dom";
import "../App.css";


function Checkout({ cartItems = [], setCartItems }) {
    
    const navigate = useNavigate();

  // XÓA 1 SẢN PHẨM
  const removeItem = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  // TÍNH TỔNG TIỀN
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="checkout">
        <h1>Checkout</h1>
        <p>Giỏ hàng trống</p>
        <button onClick={() => navigate("/")}>
          Quay về trang chủ
        </button>
      </div>
    );
  }
  const handlePlaceOrder = () => {
    alert("Order placed!");
    setCartItems([]); // clear cart
    navigate("/");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "80px" }}
          />
        <span>
          {item.name} - ${item.price} x {item.quantity}
        </span>

          <button onClick={() => removeItem(item.id)}>
        
          </button>
        </div>
      ))}

      <h2>Tổng tiền: ${totalPrice}</h2>

      <button onClick={() => alert("Đặt hàng thành công!")}>
        Place Order
      </button>

      <br /><br />

      <button onClick={() => navigate("/cart")}>
        Quay lại giỏ hàng
      </button>
    </div>
  );
}

export default Checkout;
