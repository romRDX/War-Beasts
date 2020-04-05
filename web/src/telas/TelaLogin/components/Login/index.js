import React from "react";

import { FormLogin } from "./styles.js";

import history from 'services/history';

const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/personagens');
  }

  return (
    <div className="Login">
      <FormLogin onSubmit={ handleSubmit }>
        <label htmlFor="user">Usuário</label>
        <input id="email" />
        <label htmlFor="password">Senha</label>
        <input id="password" />
        <button type="submit">Login</button>
      </FormLogin>
    </div>
  )
}

export default Login;
