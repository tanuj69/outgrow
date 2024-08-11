// models/Owner.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Business = require('./Business');

const Owner = sequelize.define('Owner', {
    owner_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'owner_id'
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
    business_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Business,
            key: 'business_id'
        },
        field: 'business_id'
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
    tableName: 'owners'
});

Owner.belongsTo(Business, { foreignKey: 'business_id' });
Business.hasMany(Owner, { foreignKey: 'business_id' });

module.exports = Owner;