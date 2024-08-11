// models/Business.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Business = sequelize.define('Business', {
    business_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'business_id'
    },
    business_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'business_name'
    },
    business_address: {
        type: DataTypes.TEXT,
        field: 'business_address'
    },
    business_email: {
        type: DataTypes.STRING(255),
        field: 'business_email'
    },
    business_phone: {
        type: DataTypes.STRING(20),
        field: 'business_phone'
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
    tableName: 'businesses'
});

module.exports = Business;