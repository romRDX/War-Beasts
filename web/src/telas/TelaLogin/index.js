import React from 'react'
import Login from './components/Login';

import { Background, Conteiner } from "./styles.js";

const TelaLogin = () => {
    
    return (
        <Background>
            <Conteiner>
                <h1>WAR BEAST</h1>
                <Login />
            </Conteiner>
        </Background>
    )
}


export default TelaLogin;