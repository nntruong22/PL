import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
