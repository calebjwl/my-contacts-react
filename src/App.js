import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddContactForm from './components/AddContactForm';
import Contact from './components/Contact';

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
        <h1>Contacts</h1>
        {
          Object
          .keys(this.state.contacts)
          .map(key => <Contact key={key} index={key} details={this.state.contacts[key]}/>)
        }
      </div>
    );
  }
}

export default App;
