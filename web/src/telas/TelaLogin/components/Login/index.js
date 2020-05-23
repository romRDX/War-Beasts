import React, { useCallback} from "react";
import { useHistory } from 'react-router-dom';

import { FormLogin } from "./styles.js";

const Login = () => {
  const history = useHistory();

  const handleSubmit = useCallback( (e) => {
    e.preventDefault();
    history.push('/personagens');
  }, [history]);

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
