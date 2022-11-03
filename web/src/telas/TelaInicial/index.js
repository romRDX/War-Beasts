import React, { useEffect } from 'react';

import { Botao } from 'globalComponents/Botoes/styles';

import { Background, Container, Container2 } from "./styles.js";
import { Link } from 'react-router-dom';

const TelaLogin = () => {
    return (
        <Background>
            <Container>
                <h1>WAR BEAST</h1>
                <Container2>
                    <Botao theme={{size: [40,50], fontSize: '35px', paddA: '13%' }}><Link to="/login">Jogar</Link></Botao>
                    <Botao theme={{size: [40,50], fontSize: '35px', paddA: '13% 2%' }}> <Link to ="/registro">Cadastrar</Link></Botao>
                </Container2>
            </Container>
        </Background>
    )
}


export default TelaLogin;