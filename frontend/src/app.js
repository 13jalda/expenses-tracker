import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Expenses from './pages/Expenses';
import Incomes from './pages/Incomes';
import Categories from './pages/Categories';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';

import './scss/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/incomes" component={Incomes} />
            <Route path="/categories" component={Categories} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={AboutUs} />
            <Route path="/login" component={Login} />
            {/* Ruta 404 */}
            <Route render={() => <h1>404: Page not found</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
