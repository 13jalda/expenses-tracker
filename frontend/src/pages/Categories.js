import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import CategoryForm from '../components/CategoryForm';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const handleAddCategory = async (category) => {
    const response = await axios.post('/categories', category);
    setCategories([...categories, response.data]);
  };

  return (
    <div>
      <h2>Categories</h2>
      <CategoryForm onSubmit={handleAddCategory} />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
