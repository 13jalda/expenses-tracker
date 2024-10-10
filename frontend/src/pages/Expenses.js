import React, { Component } from 'react';
import axios from 'axios';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      intervalId: null
    };
  }

  componentDidMount() {
    this.fetchExpenses();
    const intervalId = setInterval(() => this.fetchExpenses(), 60000); // Actualizar cada minuto
    this.setState({ intervalId });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses !== this.state.expenses) {
      console.log('Los gastos han sido actualizados.');
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  fetchExpenses() {
    axios.get('/api/expenses')
      .then(response => {
        this.setState({ expenses: response.data });
      })
      .catch(error => console.error('Error fetching expenses:', error));
  }

  render() {
    const { expenses } = this.state;

    return (
      <div>
        <h2>Expenses</h2>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              {expense.amount} - {expense.category} - {expense.date}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Expenses;
