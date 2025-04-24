import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar'; 
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';

const ProductListing = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.get('https://fakestoreapi.com/products');
                setProducts(productResponse.data);
                setFilteredProducts(productResponse.data);

                const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(categoryResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleFilter = (category) => {
        const filtered = category === "All"
            ? products
            : products.filter(product => product.category === category);
        setFilteredProducts(filtered);
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const searchedProducts = products.filter(product => 
            product.title.toLowerCase().includes(query)
        );
        
        setFilteredProducts(searchedProducts);
    };

    return (
        <div>
            <h1>Our Featured Products</h1>
            <h2>Find everything you need, all in one place!</h2>

            
            <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />

            
            <FilterBar categories={categories} handleFilter={handleFilter} />

            
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default ProductListing;
