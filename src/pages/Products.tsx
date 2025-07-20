import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const Products: React.FC = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products'); // Replace with your API endpoint
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="products-page">
            <h1>Productos Disponibles</h1>
            <div className="products-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;