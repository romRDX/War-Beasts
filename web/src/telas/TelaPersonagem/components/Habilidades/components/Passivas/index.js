import React from 'react';
import { connect } from 'react-redux';

import { Box } from './styles';

const Passivas = (props) => (
    <Box>
    <div>PASSIVAS</div>
    
    </Box>                        
);

export default connect( state => ({ character: state.activeCharacter }))(Passivas);