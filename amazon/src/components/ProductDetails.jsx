import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const {id} = useParams();
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
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
