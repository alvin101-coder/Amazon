import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'; 
import ProductListing from './components/ProductingListing';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import HeroSection from './components/HeroSection';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]); 
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id)); 
    };

    return (
        <Router>
            <Navbar cart={cart} /> 
            <HeroSection />
            <Routes>
                <Route path="/" element={<ProductListing addToCart={addToCart} />} />
                <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    );
};

export default App;