const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token no válido.' });
    }
};

const adminMiddleware = (req, res, next) => {
    const userId = req.user.id;

    User.findById(userId)
        .then(user => {
            if (user && user.role === 'admin') {
                next();
            } else {
                res.status(403).json({ message: 'Acceso denegado. Se requiere rol de administrador.' });
            }
        })
        .catch(err => res.status(500).json({ message: 'Error al verificar el usuario.' }));
};

module.exports = {
    authMiddleware,
    adminMiddleware
};