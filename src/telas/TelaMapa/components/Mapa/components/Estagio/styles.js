import styled from 'styled-components';

export const Box = styled.div`
    font-size: 30px;
    display: flex;
    left: ${props => props.posicao[0] }%;
    top: ${props => props.posicao[1] }%;
    position: absolute;
    border: 2px solid black;
    border-radius: 50%;
    color: ${ props => props.isSelected ? "white" : "red"};
    width: 50px;
    height: 50px;
    background: ${ props => props.isSelected ? "red" : "white"};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 15px 4px red;
    }
`;
