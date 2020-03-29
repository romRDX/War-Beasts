import React from 'react';
import { connect } from 'react-redux';

import { Box } from './styles';

const Skills = (props) => (
    <Box>
    <div>SKILLS</div>
    
    </Box>                        
);

export default connect( state => ({ character: state.activeCharacter }))(Skills);