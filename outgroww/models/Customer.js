// models/Customer.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
    customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'customer_id'
    },
    first_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'first_name'
    },
    last_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        field: 'email'
    },
    phone_number: {
        type: DataTypes.STRING(20),
        field: 'phone_number'
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
    tableName: 'customers'
});

module.exports = Customer;