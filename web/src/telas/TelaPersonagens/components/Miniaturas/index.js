import React from 'react'
import { connect } from 'react-redux';

import Miniatura from './components/Miniatura';
import { MiniaturasBox , Minis } from './styles.js';

const Miniaturas = ( props ) => (
        <MiniaturasBox>
            <h1>WAR BEAST</h1>
            <Minis>
                {   
                    props.characters.map( char => (
                        <Miniatura func={props.func} char={char} key={char.id}/>
                    ))
                }
            </Minis>
        </MiniaturasBox>
);

export default connect( state => ({ characters: state.characters }))(Miniaturas);
