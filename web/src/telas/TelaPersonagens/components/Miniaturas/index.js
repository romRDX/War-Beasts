import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Miniatura from './components/Miniatura';
import { Conteiner , Minis, NovoPersonagem } from './styles.js';

const Miniaturas = ( props ) => (
        <Conteiner>
            <h1>WAR BEAST</h1>
            <Minis>
                {   
                    props.characters.map( char => (
                        <Miniatura char={char} key={char.id}/>
                    ))
                }
            </Minis>
            <Link className='novoPersonagem' to="/personagens/novo">Criar novo personagem</Link>
        </Conteiner>
);

export default connect( state => ({ characters: state.characters }))(Miniaturas);
