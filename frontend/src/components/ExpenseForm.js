import React, { useState } from 'react';
import axios from '../api/axios';

const ExpenseForm = ({ onSubmit }) => {
  const [expense, setExpense] = useState({ amount: '', category: '', date: '' });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={expense.category} onChange={handleChange} />
      <input type="date" name="date" value={expense.date} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
