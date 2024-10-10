const Expense = require('../models/Expense');
const Category = require('../models/Category');

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({ include: [Category] });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addExpense = async (req, res) => {
  const { amount, date, categoryId } = req.body;
  try {
    const newExpense = await Expense.create({
      amount,
      date,
      categoryId,
      userId: req.user.id
    });
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExpense = async (req, res) => {
  const { amount, date, categoryId } = req.body;
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });

    expense.amount = amount;
    expense.date = date;
    expense.categoryId = categoryId;
    await expense.save();

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });

    await expense.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
