import React from 'react';
import { connect } from 'react-redux';

import { Box } from './styles';

const Portrait = (props) => (
    <Box>
        <div>FOTO</div>
    </Box>                        
);

export default connect( state => ({ character: state.activeCharacter }))(Portrait);