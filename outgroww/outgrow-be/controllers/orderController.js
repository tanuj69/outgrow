const Order = require('../models/Order');

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error });
    }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error });
    }
};

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error creating order', error });
    }
};

// Update an order
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Order.update(req.body, { where: { order_id: id } });
        if (updated) {
            const updatedOrder = await Order.findByPk(id);
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating order', error });
    }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Order.destroy({ where: { order_id: id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};