import React, { Component } from 'react';

export default class AddContactForm extends Component {
  createContact(e) {
    e.preventDefault();
    const contact = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      address: this.address.value,
      phone: this.phone.value,
      mail: this.mail.value,
    }
    this.props.addContact(contact);
    this.contactForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.contactForm = input} className="contact-edit" role="form" onSubmit={(e) => this.createContact(e)}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input ref={(input) => this.firstName = input} className="form-control" type="text" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input ref={(input) => this.lastName = input} className="form-control" type="text" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Street Address</label>
          <input ref={(input) => this.address = input} className="form-control" type="text" placeholder="Street Address"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <input ref={(input) => this.phone = input} className="form-control" type="text" placeholder="Phone Number"/>
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input ref={(input) => this.mail = input} className="form-control" type="text" placeholder="E-mail"/>
        </div>

        <button className="btn btn-default">Clear</button>
        <button className="btn btn-default">Submit</button>
      </form>
    );
  }
}
