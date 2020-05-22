import React from 'react';

import { Botao } from 'globalComponents/Botoes/styles';

import { Background, Conteiner, Conteiner2 } from "./styles.js";
import { Link } from 'react-router-dom';

const TelaLogin = () => {
    const teste = (e) => {
        e.preventDefault();
    }
    
    return (
        <Background>
            <Conteiner>
                <h1>WAR BEAST</h1>
                <Conteiner2>
                    <form onSubmit={ teste }>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="name" required />
                        </div>
                        <div>
                            <label>Usuário</label>
                            <input type="text" name="user" required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" required />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password" name="password1"/>
                        </div>
                        <div>
                            <label>Insira a senha novamente</label>
                            <input type="password" name="password2"/>
                        </div>
                        <Botao type="submit" theme={{size: [60,30], fontSize: '35px', paddA: '13% 2%' }}>Cadastrar</Botao>
                    </form>
                </Conteiner2>
            </Conteiner>
        </Background>
    )
}


export default TelaLogin;