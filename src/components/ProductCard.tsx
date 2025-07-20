import React from 'react';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price.toFixed(2)}</p>
            <button className="add-to-cart-button" onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;