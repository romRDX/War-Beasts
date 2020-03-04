import styled from 'styled-components';

export const Mapas = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    width: 60%;
    overflow-y: scroll;
    height: 100%;
    justify-content: flex-start;
`;


export const Tokens = styled.div`
    
    position: fixed;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    top: 0;
    left: 40%;
    font-size: 35px;
    font-family: 'Teko';
    padding: .5% 1.6% .5% 1.6%;
    border-radius: 0 0 10px 0;
`;