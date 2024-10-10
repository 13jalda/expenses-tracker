import React, { Component } from 'react';
import axios from 'axios';

class Incomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomes: [],
      intervalId: null
    };
  }

  componentDidMount() {
    this.fetchIncomes();
    const intervalId = setInterval(() => this.fetchIncomes(), 60000); // Actualizar cada minuto
    this.setState({ intervalId });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.incomes !== this.state.incomes) {
      console.log('Los ingresos han sido actualizados.');
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  fetchIncomes() {
    axios.get('/api/incomes')
      .then(response => {
        this.setState({ incomes: response.data });
      })
      .catch(error => console.error('Error fetching incomes:', error));
  }

  render() {
    const { incomes } = this.state;

    return (
      <div>
        <h2>Incomes</h2>
        <ul>
          {incomes.map(income => (
            <li key={income.id}>
              {income.amount} - {income.category} - {income.date}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Incomes;
