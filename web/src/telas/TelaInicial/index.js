import React from 'react';

import { Botao } from 'globalComponents/Botoes/styles';

import { Background, Conteiner, Conteiner2 } from "./styles.js";
import { Link } from 'react-router-dom';

const TelaLogin = () => {
    
    return (
        <Background>
            <Conteiner>
                <h1>WAR BEAST</h1>
                <Conteiner2>
                    <Botao theme={{size: [40,50], fontSize: '35px', paddA: '13%' }}><Link to="/login">Jogar</Link></Botao>
                    <Botao theme={{size: [40,50], fontSize: '35px', paddA: '13% 2%' }}> <Link to ="/registro">Cadastrar</Link></Botao>
                </Conteiner2>
            </Conteiner>
        </Background>
    )
}


export default TelaLogin;