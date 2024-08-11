const Customer = require('../models/Customer');

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving customers', error });
    }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving customer', error });
    }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: 'Error creating customer', error });
    }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Customer.update(req.body, { where: { customer_id: id } });
        if (updated) {
            const updatedCustomer = await Customer.findByPk(id);
            res.json(updatedCustomer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating customer', error });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Customer.destroy({ where: { customer_id: id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting customer', error });
    }
};