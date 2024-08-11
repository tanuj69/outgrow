const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductPhoto = sequelize.define('ProductPhoto', {
    photo_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'product_id'
        },
        onDelete: 'CASCADE'
    },
    photo_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'product_photos',
    timestamps: false
});

module.exports = ProductPhoto;