import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginAttempts: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loginAttempts !== this.state.loginAttempts) {
      console.log(`Intentos de inicio de sesión: ${this.state.loginAttempts}`);
    }
  }

  componentWillUnmount() {
    // Cancelar cualquier solicitud en curso si el componente se desmonta
    if (this.source) {
      this.source.cancel('Componente desmontado, solicitud cancelada');
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.source = axios.CancelToken.source();

    axios.post('/api/login', { email, password }, { cancelToken: this.source.token })
      .then(response => {
        console.log('User logged in:', response.data);
        this.props.history.push('/dashboard');
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Solicitud cancelada:', error.message);
        } else {
          console.error('Error logging in:', error);
        }
      });

    this.setState((prevState) => ({ loginAttempts: prevState.loginAttempts + 1 }));
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
