import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const products = [
  { id: 1, name: "Logitech G102", price: 100, image: "/img/anh1.png" },
  { id: 2, name: "DareU EM911", price: 200, image: "/img/anh2.png" },
  { id: 3, name: "ATK X1 pro", price: 150, image: "/img/anh3.png" },
  { id: 4, name: "ATK A9 plus", price: 250, image: "/img/anh4.webp" },
  
];

function Home() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(300);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price <= maxPrice
  );

  return (
    <div className="home">
      <h1>A CHUỘT ĐÂY RỒI!</h1>

      {/* FILTER */}
      <div className="filter-box">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setMaxPrice(Number(e.target.value))}>
          <option value="300">Tất cả giá</option>
          <option value="150">Dưới $150</option>
          <option value="200">Dưới $200</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="product-link"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Home;
