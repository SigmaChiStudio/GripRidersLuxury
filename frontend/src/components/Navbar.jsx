import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link to="/">GripRidersLuxury</Link>
            </div>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-red-500">Inicio</Link>
                </li>
                <li>
                    <Link to="/products" className="hover:text-red-500">Productos</Link>
                </li>
                <li>
                    <Link to="/cart" className="hover:text-red-500">Carrito</Link>
                </li>
                <li>
                    <Link to="/login" className="hover:text-red-500">Iniciar Sesión</Link>
                </li>
                <li>
                    <Link to="/register" className="hover:text-red-500">Registrarse</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;