import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    box-sizing: border-box;
    padding: 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    height: 32%;
    justify-content: flex-start;
`;

export const Dado = styled.div`
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    ${props => props.icon && `background-image: url(${props.icon});`}
    box-sizing: border-box;
    border: ${props => props.isSelected ? "3px solid red;" : "1px solid gray;"}
`;