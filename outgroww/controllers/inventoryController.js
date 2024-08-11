const Inventory = require('../models/Inventory');

// Get all inventory records
exports.getAllInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll();
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inventory', error });
    }
};

// Get an inventory record by ID
exports.getInventoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const inventory = await Inventory.findByPk(id);
        if (inventory) {
            res.json(inventory);
        } else {
            res.status(404).json({ message: 'Inventory record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inventory record', error });
    }
};

// Create a new inventory record
exports.createInventory = async (req, res) => {
    try {
        const inventory = await Inventory.create(req.body);
        res.status(201).json(inventory);
    } catch (error) {
        res.status(400).json({ message: 'Error creating inventory record', error });
    }
};

// Update an inventory record
exports.updateInventory = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Inventory.update(req.body, { where: { inventory_id: id } });
        if (updated) {
            const updatedInventory = await Inventory.findByPk(id);
            res.json(updatedInventory);
        } else {
            res.status(404).json({ message: 'Inventory record not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating inventory record', error });
    }
};

// Delete an inventory record
exports.deleteInventory = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Inventory.destroy({ where: { inventory_id: id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Inventory record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting inventory record', error });
    }
};