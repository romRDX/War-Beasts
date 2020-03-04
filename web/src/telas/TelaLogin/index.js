import React from 'react'
import Login from './components/Login';

import { Background } from "./styles.js";

const TelaLogin = () => {
    
    return (
        <Background>
            <div>
                <h1>WAR BEAST</h1>
                <Login />
            </div>
        </Background>
    )
}


export default TelaLogin;