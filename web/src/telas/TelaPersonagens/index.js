import React, { useState, useEffect } from 'react';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';

// const character1 = {id: 2536734, nome: 'Renekton', nivel: 10, classe: 'Crocodilo', atributos: {STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}};
// const character2 = {id: 6724536, nome: 'Elise', nivel: 5, classe: 'Aranha', atributos: {STR: 3, DEX: 7, CON: 3 , INT: 4, TOU: 5, AGI: 6}};
// const character3 = {id: 4574335, nome: 'Warwick', nivel: 7, classe: 'Lobo', atributos: {STR: 5, DEX: 3, CON: 5 , INT: 7, TOU: 8, AGI: 9}};
// const characters = [character1, character2, character3];

export default function TelaPersonagens(props) {
    const [ selected, setSelected ] = useState('');

    function test(select) {
        setSelected(select);
    }

    useEffect( ()=> {

        return () => {

        };

    }, [selected]);

    return (
        <Selecao>
            <Miniaturas func={test.bind(this)}/>
            <PersonagemInfo slc={selected}/>
        </Selecao>
    )

}

// return (
//     <Provider store={store}>
//         <Selecao>
//             <Miniaturas>
//                 <h1>WAR BEAST</h1>
//                 <div className="minis">
//                     {
//                         characters.map( char => (
//                             <Miniatura key={char.id} func={test.bind(this)} info={char} />
//                         ))
//                     }
//                 </div>
//             </Miniaturas>
//             <PersonagemInfo>
//                 {selected && <Personagem char={selected} /> }
//             </PersonagemInfo>
//         </Selecao>
//     </Provider>
    
// )