// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Business = require('./Business');
const Customer = require('./Customer');

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'order_id'
    },
    order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'order_date'
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'total_amount'
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'status'
    },
    business_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Business,
            key: 'business_id'
        },
        field: 'business_id'
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'customer_id'
        },
        field: 'customer_id'
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
    tableName: 'orders'
});

Order.belongsTo(Business, { foreignKey: 'business_id' });
Business.hasMany(Order, { foreignKey: 'business_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasMany(Order, { foreignKey: 'customer_id' });

module.exports = Order;