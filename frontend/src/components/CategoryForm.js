import React, { useState } from 'react';
import axios from '../api/axios';

const CategoryForm = ({ onSubmit }) => {
  const [category, setCategory] = useState({ name: '' });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(category);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Category Name" value={category.name} onChange={handleChange} />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
