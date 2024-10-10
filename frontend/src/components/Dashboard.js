import React, { Component } from 'react';
import Modal from './Modal';

class Dashboard extends Component {
  state = {
    isModalOpen: false,
    selectedRecord: null,
  };

  handleSelectRecord = (record) => {
    this.setState({
      selectedRecord: record,
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, selectedRecord: null });
  };

  handleSaveRecord = () => {
    // Call API to save changes
    this.setState({ isModalOpen: false, selectedRecord: null });
    // Refresh the list or update state accordingly
  };

  handleChange = (field, value) => {
    this.setState((prevState) => ({
      selectedRecord: {
        ...prevState.selectedRecord,
        [field]: value,
      },
    }));
  };

  render() {
    const { incomes, expenses } = this.props;
    const { isModalOpen, selectedRecord } = this.state;

    return (
      <div className="dashboard">
        <h2>Dashboard</h2>

        <div className="incomes">
          <h3>Incomes</h3>
          <ul>
            {incomes.map((income) => (
              <li key={income.id} onClick={() => this.handleSelectRecord(income)}>
                {income.amount} - {income.date}
              </li>
            ))}
          </ul>
        </div>

        <div className="expenses">
          <h3>Expenses</h3>
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id} onClick={() => this.handleSelectRecord(expense)}>
                {expense.amount} - {expense.date}
              </li>
            ))}
          </ul>
        </div>

        <Modal
          isOpen={isModalOpen}
          record={selectedRecord}
          onClose={this.handleCloseModal}
          onSave={this.handleSaveRecord}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Dashboard;
