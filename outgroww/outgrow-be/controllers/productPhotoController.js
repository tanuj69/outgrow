const ProductPhoto = require('../models/ProductPhoto');

// Add a new photo for a product
exports.addPhoto = async (req, res) => {
    try {
        const { product_id, photo_url } = req.body;
        const newPhoto = await ProductPhoto.create({ product_id, photo_url });
        res.status(201).json(newPhoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all photos for a product
exports.getPhotosByProductId = async (req, res) => {
    try {
        const { product_id } = req.params;
        const photos = await ProductPhoto.findAll({ where: { product_id } });
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a photo by ID
exports.deletePhoto = async (req, res) => {
    try {
        const { photo_id } = req.params;
        await ProductPhoto.destroy({ where: { photo_id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};