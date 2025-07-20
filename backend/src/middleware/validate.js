const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
    body('name').notEmpty().withMessage('El nombre es obligatorio.'),
    body('email').isEmail().withMessage('El correo electrónico no es válido.'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateProductCreation = [
    body('name').notEmpty().withMessage('El nombre del producto es obligatorio.'),
    body('description').notEmpty().withMessage('La descripción del producto es obligatoria.'),
    body('price').isNumeric().withMessage('El precio debe ser un número.'),
    body('category').notEmpty().withMessage('La categoría es obligatoria.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateUserRegistration,
    validateProductCreation
};