import React, { Component } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>Properties</li>
          <li>Contacts</li>
        </ul>
        <button className="button_login">Login</button>
      </div>
    );
  }
}
