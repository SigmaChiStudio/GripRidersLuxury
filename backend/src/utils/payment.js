const ePayco = require('epayco-sdk-node');
const dotenv = require('dotenv');

dotenv.config();

const epayco = new ePayco({
    apiKey: process.env.EPAYCO_API_KEY,
    privateKey: process.env.EPAYCO_PRIVATE_KEY,
    test: true // Cambiar a false en producción
});

// Función para crear un pago
const createPayment = async (paymentData) => {
    try {
        const payment = await epayco.payment.create(paymentData);
        return payment;
    } catch (error) {
        throw new Error('Error al crear el pago: ' + error.message);
    }
};

// Función para verificar el estado de un pago
const getPaymentStatus = async (paymentId) => {
    try {
        const payment = await epayco.payment.get(paymentId);
        return payment;
    } catch (error) {
        throw new Error('Error al obtener el estado del pago: ' + error.message);
    }
};

// Función para procesar un pago
const processPayment = async (req, res) => {
    const paymentData = {
        token_card: req.body.token_card,
        customer_id: req.body.customer_id,
        plan_id: req.body.plan_id,
        // Otros datos necesarios para el pago
    };

    try {
        const payment = await createPayment(paymentData);
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPayment,
    getPaymentStatus,
    processPayment
};