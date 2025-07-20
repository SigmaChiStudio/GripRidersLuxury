import React, { useState } from 'react';

const Checkout: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPaymentMethod(event.target.value);
    };

    const handleConfirmOrder = () => {
        // Logic to confirm the order
        setOrderConfirmed(true);
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {orderConfirmed ? (
                <div className="order-confirmation">
                    <h2>Thank you for your order!</h2>
                    <p>Your order has been confirmed.</p>
                </div>
            ) : (
                <div>
                    <h2>Select Payment Method</h2>
                    <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="">Select...</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Bank Transfer</option>
                    </select>
                    <button onClick={handleConfirmOrder} disabled={!paymentMethod}>
                        Confirm Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default Checkout;