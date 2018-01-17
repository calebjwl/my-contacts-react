import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const details = this.props.details;
    const index = this.props.index;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{details.lastName}, {details.firstName}</div>
        <div className="panel-body">
          <ul>
            <li>{details.address}</li>
            <li>{details.phone}</li>
            <li>{details.mail}</li>
          </ul>
        </div>
        <button className="btn btn-danger">Delete</button>
      </div>
    )
  }
}
