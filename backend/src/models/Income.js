const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Income = sequelize.define('Income', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Income;
