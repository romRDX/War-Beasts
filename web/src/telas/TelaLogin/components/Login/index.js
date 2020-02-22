import React from "react";

import { FormLogin } from "./styles.js";

import history from 'services/history';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/personagens');
  }

  return (
    <div className="Login">
      <FormLogin onSubmit={ handleSubmit }>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        <button type="submit">Login</button>
      </FormLogin>
    </div>
  )
}

export default Login;
