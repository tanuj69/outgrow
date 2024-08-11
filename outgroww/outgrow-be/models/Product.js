// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Business = require('./Business');
const Category = require('./Category');

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'product_id'
    },
    product_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'product_name'
    },
    product_description: {
        type: DataTypes.TEXT,
        field: 'product_description'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'price'
    },
    quantity_in_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'quantity_in_stock'
    },
    business_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Business,
            key: 'business_id'
        },
        field: 'business_id'
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'category_id'
        },
        field: 'category_id'
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
    tableName: 'products'
});

Product.belongsTo(Business, { foreignKey: 'business_id' });
Business.hasMany(Product, { foreignKey: 'business_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = Product;