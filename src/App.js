import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddContactForm from './components/AddContactForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddContactForm />
      </div>
    );
  }
}

export default App;
