// models/OrderItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = sequelize.define('OrderItem', {
    order_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'order_item_id'
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'order_id'
        },
        field: 'order_id'
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'product_id'
        },
        field: 'product_id'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'quantity'
    },
    price_at_time_of_order: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'price_at_time_of_order'
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
    tableName: 'order_items'
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(OrderItem, { foreignKey: 'product_id' });

module.exports = OrderItem;