import React, { useState } from 'react';
import axios from '../api/axios';

const IncomeForm = ({ onSubmit }) => {
  const [income, setIncome] = useState({ amount: '', category: '', date: '' });

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(income);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="amount" placeholder="Amount" value={income.amount} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={income.category} onChange={handleChange} />
      <input type="date" name="date" value={income.date} onChange={handleChange} />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
