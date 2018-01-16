import React, { Component } from 'react';
import '../App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <h1 className="title">MyContacts</h1>
      </div>
    )
  }
}
