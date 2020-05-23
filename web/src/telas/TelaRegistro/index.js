import React from 'react';

import { Botao } from 'globalComponents/Botoes/styles';

import { Background, Container, Container_2 } from "./styles.js";

const TelaLogin = () => {
    const teste = (e) => {
        e.preventDefault();
        // if(a === b)
    };
    
    return (
        <Background>
            <Container>
                <h1>WAR BEAST</h1>
                <Container_2>
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
                </Container_2>
            </Container>
        </Background>
    )
}


export default TelaLogin;