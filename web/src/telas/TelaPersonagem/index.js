import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TelaPersonagem = (props) => (
            <div>
                <h1>PERSONAGEM</h1>
                <Link to="/main">Voltar</Link>
                <h1>{props.characters.nome}</h1>
            </div>
);


export default connect( state => ({ characters: state.activeCharacter }))(TelaPersonagem);