import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
        calculateTotal(storedCart);
    }, []);

    const calculateTotal = (items) => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout...');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: ${item.price.toFixed(2)}</p>
                                </div>
                                <button 
                                    className="text-red-500 hover:text-red-700" 
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <button 
                            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700" 
                            onClick={handleCheckout}
                        >
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            )}
            <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
                Volver a la tienda
            </Link>
        </div>
    );
};

export default Cart;