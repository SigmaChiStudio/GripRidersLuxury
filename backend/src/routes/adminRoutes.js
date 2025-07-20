const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

// Rutas para la gestión de productos
router.post('/products', authMiddleware.verifyAdmin, adminController.createProduct);
router.put('/products/:id', authMiddleware.verifyAdmin, adminController.updateProduct);
router.delete('/products/:id', authMiddleware.verifyAdmin, adminController.deleteProduct);
router.get('/products', authMiddleware.verifyAdmin, adminController.getAllProducts);

// Rutas para la gestión de usuarios
router.get('/users', authMiddleware.verifyAdmin, adminController.getAllUsers);
router.delete('/users/:id', authMiddleware.verifyAdmin, adminController.deleteUser);

// Rutas para la gestión de pedidos
router.get('/orders', authMiddleware.verifyAdmin, adminController.getAllOrders);
router.get('/orders/:id', authMiddleware.verifyAdmin, adminController.getOrderById);

module.exports = router;