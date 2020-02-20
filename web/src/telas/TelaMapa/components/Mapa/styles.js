import styled from 'styled-components';

import Mapa from './img/map.jpg';

export const Background = styled.div`
    
    width: 70%;
    height: 100%;
    display: flex;
    overflow: hidden;
    background-image: url(${Mapa});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
`;
