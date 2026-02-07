import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const products = [
  {
    id: 1,
    name: "Logitech G102",
    price: 100,
    image: "/img/anh1.png",
    description: "Logitech G102 is a high-performance gaming mouse.",
  },
  {
    id: 2,
    name: "DeraU EM911",
    price: 200,
    image: "/img/anh2.png",
    description: "DeraU EM911 is a high-performance gaming mouse.",
  },
   {
    id: 3,
    name: "ATK X1 pro",
    price: 150,
    image: "/img/anh3.png",
    description: "ATK X1 pro is a high-performance gaming mouse.",
  },
   {
    id: 4,
    name: "ATK A9 plus",
    price: 250,
    image: "/img/anh4.webp",
    description: "ATK A9 plus is a high-performance gaming mouse.",
  },
];

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.name}
        className="product-image-large"
      />

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
