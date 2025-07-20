import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCartItems, removeFromCart, updateCartQuantity } from '../utils/cartUtils';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
    }, []);

    const handleRemove = (id) => {
        removeFromCart(id);
        setCartItems(getCartItems());
    };

    const handleQuantityChange = (id, quantity) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-lg">{item.name}</h2>
                                    <p>Precio: ${item.price.toFixed(2)}</p>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        className="border rounded p-1 w-16"
                                    />
                                </div>
                                <button onClick={() => handleRemove(item.id)} className="text-red-500">Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-bold mt-4">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                    <Link to="/checkout" className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded">Proceder al Pago</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;