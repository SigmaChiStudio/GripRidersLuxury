import React, { useEffect, useState } from 'react';

const ReviewSection = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`/api/products/${productId}/reviews`);
                if (!response.ok) {
                    throw new Error('Error fetching reviews');
                }
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [productId]);

    if (loading) {
        return <div>Loading reviews...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="review-section">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul className="review-list">
                    {reviews.map((review) => (
                        <li key={review.id} className="border-b py-4">
                            <h3 className="font-semibold">{review.user.name}</h3>
                            <p className="text-gray-600">{review.comment}</p>
                            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewSection;