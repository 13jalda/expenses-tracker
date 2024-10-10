const sequelize = require('../config/config');
const User = require('./User');
const Expense = require('./Expense');
const Income = require('./Income');
const Category = require('./Category');

// Synchronize models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = { User, Expense, Income, Category };
