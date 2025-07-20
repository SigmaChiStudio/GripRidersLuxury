import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-black text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-400">{product.description}</p>
            <p className="text-red-500 font-semibold mt-2">${product.price}</p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
            </button>
        </div>
    );
};

export default ProductCard;