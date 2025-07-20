import React from 'react';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';
import './Cart.css';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (id: string, quantity: number) => {
        updateQuantity(id, quantity);
    };

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Tu Carrito</h1>
            {cartItems.length === 0 ? (
                <p>No hay productos en tu carrito.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onQuantityChange={handleQuantityChange}
                            onRemove={handleRemove}
                        />
                    ))}
                    <h2>Total: ${totalAmount.toFixed(2)}</h2>
                    <button className="checkout-button">Proceder al Pago</button>
                </div>
            )}
        </div>
    );
};

export default Cart;