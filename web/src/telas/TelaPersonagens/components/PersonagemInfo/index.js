import React from 'react'

import Personagem from './components/Personagem';

const PersonagemInfo = (props) => {
    
    return (
        <>  
            {props.slc && <Personagem char={props.slc} /> }
        </>
    )
}

export default PersonagemInfo;