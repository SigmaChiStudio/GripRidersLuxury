import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './yakusa-theme.css';

const Home: React.FC = () => {
    const featuredProducts = [
        // Aquí se pueden agregar productos destacados
        // Ejemplo: { id: 1, name: 'Producto 1', price: 100, image: 'ruta/a/la/imagen' }
    ];

    return (
        <div className="home">
            <Navbar />
            <header className="hero-banner">
                <h1>Bienvenido a GripRidersLuxury</h1>
                <p>Descubre los mejores productos de belleza y mantenimiento para tu moto.</p>
            </header>
            <section className="featured-products">
                <h2>Productos Destacados</h2>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;