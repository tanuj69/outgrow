// models/Inventory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Inventory = sequelize.define('Inventory', {
    inventory_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'inventory_id'
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'product_id'
        },
        field: 'product_id'
    },
    change_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'change_quantity'
    },
    change_reason: {
        type: DataTypes.STRING(255),
        field: 'change_reason'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at'
    }
}, {
    timestamps: false,
    tableName: 'inventory'
});

Inventory.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(Inventory, { foreignKey: 'product_id' });

module.exports = Inventory;