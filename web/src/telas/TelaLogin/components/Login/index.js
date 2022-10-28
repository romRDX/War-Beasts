import React, { useCallback, useEffect, useState} from "react";
import { useAuth } from "hooks/useAuth.js";
import { useHistory } from 'react-router-dom';
import { apiWB } from "services/axios.js";

import { FormLogin } from "./styles.js";

const Login = () => {
  const history = useHistory();
  const { handleAddAuthData } = useAuth();

  const [errorMessage,setErrorMessage] = useState(null);

  useEffect(() =>{
    if(errorMessage !== null){
      setTimeout(() => {
        setErrorMessage(null);
      }, 10000)
    }
  }, [errorMessage]);

  const handleSubmit = useCallback( (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    apiWB.post('/login', {
      params: JSON.stringify({
        email,
        password,
      })
    }).then((resp) => {
      handleAddAuthData(resp.data.userData);
      history.push('/personagens');
    }).catch(error => {
      if(error.response.status === 400){
        setErrorMessage(error.response.data);
      }
    });
    
  }, [history]);

  return (
    <div className="Login">
      <FormLogin onSubmit={ handleSubmit }>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        <button type="submit">Login</button>
        { errorMessage && <div>{errorMessage}</div>}
      </FormLogin>
    </div>
  )
}

export default Login;
