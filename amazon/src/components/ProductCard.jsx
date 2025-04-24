import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => (
    <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Link to={`/product/${product.id}`}>View Details</Link>
        <button onClick={() => {
            addToCart(product);
            console.log("Added to cart:", product);
        }}>Add to Cart</button>
    </div>
);

export default ProductCard;