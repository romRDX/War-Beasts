import styled from 'styled-components';

export const Box = styled.div`
    font-size: 30px;
    display: flex;
    left: ${props => props.posicao[0] }%;
    top: ${props => props.posicao[1] }%;
    position: absolute;
    border: 2px solid black;
    border-radius: 50%;
    background: ${ props => props.cor };
    color: red;
    width: 30px;
    height: 30px;

    &:hover {
        box-shadow: 0px 0px 15px 4px red;
    }
`;
