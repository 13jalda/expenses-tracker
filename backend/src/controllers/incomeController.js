const Income = require('../models/Income');
const Category = require('../models/Category');

exports.getAllIncomes = async (req, res) => {
  try {
    const incomes = await Income.findAll({ include: [Category] });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addIncome = async (req, res) => {
  const { amount, date, categoryId } = req.body;
  try {
    const newIncome = await Income.create({
      amount,
      date,
      categoryId,
      userId: req.user.id
    });
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateIncome = async (req, res) => {
  const { amount, date, categoryId } = req.body;
  try {
    const income = await Income.findByPk(req.params.id);
    if (!income) return res.status(404).json({ error: 'Income not found' });

    income.amount = amount;
    income.date = date;
    income.categoryId = categoryId;
    await income.save();

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    const income = await Income.findByPk(req.params.id);
    if (!income) return res.status(404).json({ error: 'Income not found' });

    await income.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
