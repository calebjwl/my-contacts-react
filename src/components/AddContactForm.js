import React, { Component } from 'react';
import '../App.css';

export default class AddContactForm extends Component {
  render() {
    return (
      <form className="contact-edit" role="form">
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input className="form-control" type="text" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input className="form-control" type="text" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Street Address</label>
          <input className="form-control" type="text" placeholder="Street Address"/>
        </div>
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <input className="form-control" type="text" placeholder="Phone Number"/>
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input className="form-control" type="text" placeholder="E-mail"/>
        </div>

        <button className="btn btn-default">Clear</button>
        <button className="btn btn-default">Submit</button>
      </form>
    );
  }
}
