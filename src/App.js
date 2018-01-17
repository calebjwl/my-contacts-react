import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddContactForm from './components/AddContactForm';

class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
    this.state = {
      contacts: {}
    }
  }

  addContact(contact) {
    const contacts = {...this.state.contacts};
    const timestamp = Date.now();
    contacts[`contact-${timestamp}`] = contact;
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddContactForm addContact={this.addContact}/>
      </div>
    );
  }
}

export default App;
