const Payment = require('../models/Payment');

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payments', error });
    }
};

// Get a payment by ID
exports.getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findByPk(id);
        if (payment) {
            res.json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payment', error });
    }
};

// Create a new payment
exports.createPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ message: 'Error creating payment', error });
    }
};

// Update a payment
exports.updatePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Payment.update(req.body, { where: { payment_id: id } });
        if (updated) {
            const updatedPayment = await Payment.findByPk(id);
            res.json(updatedPayment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating payment', error });
    }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Payment.destroy({ where: { payment_id: id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment', error });
    }
};