const OrderItem = require('../models/OrderItem');

// Get all order items
exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItem.findAll();
        res.json(orderItems);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order items', error });
    }
};

// Get an order item by ID
exports.getOrderItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderItem = await OrderItem.findByPk(id);
        if (orderItem) {
            res.json(orderItem);
        } else {
            res.status(404).json({ message: 'Order item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order item', error });
    }
};

// Create a new order item
exports.createOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItem.create(req.body);
        res.status(201).json(orderItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating order item', error });
    }
};

// Update an order item
exports.updateOrderItem = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await OrderItem.update(req.body, { where: { order_item_id: id } });
        if (updated) {
            const updatedOrderItem = await OrderItem.findByPk(id);
            res.json(updatedOrderItem);
        } else {
            res.status(404).json({ message: 'Order item not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating order item', error });
    }
};

// Delete an order item
exports.deleteOrderItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await OrderItem.destroy({ where: { order_item_id: id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Order item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order item', error });
    }
};