import React, { Component, useState } from "react";

import { FormLogin } from "./styles.js";

import history from 'services/history';



export default class Login extends Component {

  

  handleSubmit(e) {
    e.preventDefault();

    history.push('/personagens');
  
  }

  render() {
    return (
      <div className="Login">
        <FormLogin onSubmit={ this.handleSubmit }>
          <label htmlFor="email">Email</label>
          <input id="email" />
          <label htmlFor="password">Password</label>
          <input id="password" />
          <button type="submit">Login</button>
        </FormLogin>
      </div>
    )
  }
}
