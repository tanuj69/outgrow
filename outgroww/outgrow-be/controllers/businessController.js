const Business = require('../models/Business');

// Get all businesses
exports.getAllBusinesses = async (req, res) => {
    try {
        const businesses = await Business.findAll();
        res.json(businesses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving businesses', error });
    }
};

// Get a business by ID
exports.getBusinessById = async (req, res) => {
    const { id } = req.params;
    try {
        const business = await Business.findByPk(id);
        if (business) {
            res.json(business);
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving business', error });
    }
};

// Create a new business
exports.createBusiness = async (req, res) => {
    try {
        const business = await Business.create(req.body);
        res.status(201).json(business);
    } catch (error) {
        res.status(400).json({ message: 'Error creating business', error });
    }
};

// Update a business
exports.updateBusiness = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Business.update(req.body, { where: { business_id: id } });
        if (updated) {
            const updatedBusiness = await Business.findByPk(id);
            res.json(updatedBusiness);
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating business', error });
    }
};

// Delete a business
exports.deleteBusiness = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Business.destroy({ where: { business_id: id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting business', error });
    }
};