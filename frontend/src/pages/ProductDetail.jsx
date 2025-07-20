import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewSection from '../components/ReviewSection';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 md:pl-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-lg text-red-600">${product.price}</p>
                    <p className="mt-2">{product.description}</p>
                    <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
            <ReviewSection productId={id} />
        </div>
    );
};

export default ProductDetail;