const express = require('express');
const sequelize = require('./config/database'); // Path to your database configuration

// Import models
const Business = require('./models/Business');
const Owner = require('./models/Owner');
const Category = require('./models/Category');
const Product = require('./models/Product');
const Customer = require('./models/Customer');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const Payment = require('./models/Payment');
const Inventory = require('./models/Inventory');

// Initialize model associations
const initModels = () => {
    // Business and Owner
    Business.hasMany(Owner, { foreignKey: 'business_id' });
    Owner.belongsTo(Business, { foreignKey: 'business_id' });

    // Business and Product
    Business.hasMany(Product, { foreignKey: 'business_id' });
    Product.belongsTo(Business, { foreignKey: 'business_id' });

    // Category and Product
    Category.hasMany(Product, { foreignKey: 'category_id' });
    Product.belongsTo(Category, { foreignKey: 'category_id' });

    // Order and Business
    Order.belongsTo(Business, { foreignKey: 'business_id' });
    Business.hasMany(Order, { foreignKey: 'business_id' });

    // Order and Customer
    Order.belongsTo(Customer, { foreignKey: 'customer_id' });
    Customer.hasMany(Order, { foreignKey: 'customer_id' });

    // Order and OrderItem
    Order.hasMany(OrderItem, { foreignKey: 'order_id' });
    OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

    // Product and OrderItem
    Product.hasMany(OrderItem, { foreignKey: 'product_id' });
    OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

    // Order and Payment
    Order.hasMany(Payment, { foreignKey: 'order_id' });
    Payment.belongsTo(Order, { foreignKey: 'order_id' });

    // Product and Inventory
    Product.hasMany(Inventory, { foreignKey: 'product_id' });
    Inventory.belongsTo(Product, { foreignKey: 'product_id' });
};

const app = express();
app.use(express.json()); // For parsing application/json

// Initialize models and their associations
initModels();

// Sync database
sequelize.sync()
    .then(() => console.log('Database synchronized successfully'))
    .catch(err => console.error('Database synchronization failed:', err));

// Sample route (for testing)
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Start the server
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = {
    app,
    sequelize,
    Business,
    Owner,
    Category,
    Product,
    Customer,
    Order,
    OrderItem,
    Payment,
    Inventory
};