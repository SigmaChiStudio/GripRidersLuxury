import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Ajustar la ruta según la configuración del backend
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="bg-black text-white p-4">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">GripRidersLuxury</h1>
                <p className="text-lg">Productos de belleza y lujo para motociclistas</p>
            </header>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </main>
        </div>
    );
};

export default Home;