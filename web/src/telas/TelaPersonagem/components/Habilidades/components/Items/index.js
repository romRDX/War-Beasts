import React from 'react';
import { connect } from 'react-redux';

import { Box } from './styles';

const Items = (props) => (
    <Box>
        <div>ITENS</div>
        
    </Box>                        
);

export default connect( state => ({ character: state.activeCharacter }))(Items);