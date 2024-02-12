import React from 'react'

import { Container } from './styles.js';

const Detalhes = ( props ) => (
    <Container>
        <img src={props.img} />
    </Container>
);

export default Detalhes;
