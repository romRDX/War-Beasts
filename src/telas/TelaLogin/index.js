import React from 'react'
import Login from './components/Login';

import { Background, Container } from "./styles.js";

const TelaLogin = () => {
    return (
        <Background>
            <Container>
                <h1>WAR BEAST</h1>
                <Login />
            </Container>
        </Background>
    )
}


export default TelaLogin;