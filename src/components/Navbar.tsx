import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a CSS file for Navbar styles

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">GripRidersLuxury</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
            </ul>
            <div className="navbar-cart-icon">
                <Link to="/cart">
                    <img src="/assets/cart-icon.png" alt="Cart" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;