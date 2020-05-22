import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Conteiner , Minis } from './styles.js';

const Miniaturas = ( props ) => {
    return (
        <Conteiner>
            <h1>WAR BEAST</h1>
            <Minis>
                {   
                    props.characters.map( char => (
                        <Miniatura char={char} key={char.id}/>
                    ))
                }
            </Minis>
            <Botao theme={{ size: [60,6]}}><Link to="/personagens/novo">Criar novo personagem</Link></Botao>
        </Conteiner>
    )
};

export default connect( state => ({ characters: state.characters }))(Miniaturas);
