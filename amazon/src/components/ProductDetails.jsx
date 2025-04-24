import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data); 
            } catch (error) {
                console.error('Error fetching product details:', error.message);
            } finally {
                setLoading(false); 
            }
        };

        fetchProductDetails();
    }, [id]); 

    if (loading) {
        return <p className='loading'>Loading product details...</p>;
    }

    if (!product) {
        return <p className='error-message'>Product not found.</p>;
    }

    return (
        <div className='product-details'>
            <h1>{product.title}</h1>
            <div className='product-info'>
            <img src={product.image} alt={product.title} className='product-image' />
            <div className='product-meta'>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
            </div>
        </div>
        <button className='add-to-cart'>Add to Cart</button>
        </div>

    );
};

export default ProductDetails;
