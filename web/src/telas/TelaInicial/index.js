import React from 'react';

import { Botao } from 'globalComponents/Botoes/styles';

import { Background, Container, Container_2 } from "./styles.js";
import { Link } from 'react-router-dom';

const TelaLogin = () => {
    return (
        <Background>
            <Container>
                <h1>WAR BEAST</h1>
                <Container_2>
                    <Botao theme={{size: [40,50], fontSize: '35px', paddA: '13%' }}><Link to="/login">Jogar</Link></Botao>
                    <Botao theme={{size: [40,50], fontSize: '35px', paddA: '13% 2%' }}> <Link to ="/registro">Cadastrar</Link></Botao>
                </Container_2>
            </Container>
        </Background>
    )
}


export default TelaLogin;