import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
    return (
        <div className='cart-page'>
            <h1>Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className='empty-cart'>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
