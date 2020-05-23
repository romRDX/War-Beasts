import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';

const Miniaturas = ( { characters } ) => {
    return (
        <Container>
            <h1>WAR BEAST</h1>
            <Minis>
                {   
                    characters.map( character => (
                        <Miniatura character={character} key={character.id}/>
                    ))
                }
            </Minis>
            <Botao theme={{ size: [60,6]}}><Link to="/personagens/novo">Criar novo personagem</Link></Botao>
        </Container>
    )
};

export default connect( state => ({ characters: state.characters }))(Miniaturas);
