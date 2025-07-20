const Order = require('../models/Order');
const User = require('../models/User');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, products, totalAmount } = req.body;

        const newOrder = new Order({
            user: userId,
            products,
            totalAmount,
            status: 'Pending',
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).populate('products.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.orderId);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};