// models/Payment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'payment_id'
    },
    payment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'payment_date'
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'amount'
    },
    payment_method: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'payment_method'
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'order_id'
        },
        field: 'order_id'
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
    tableName: 'payments'
});

Payment.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasMany(Payment, { foreignKey: 'order_id' });

module.exports = Payment;