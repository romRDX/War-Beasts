import styled from 'styled-components';



export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-right: 1px solid black;
`;

export const Portrait= styled.div`
    width: 90%;
    border: 1px solid black;
    margin: auto;
    height: 27%;
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('${props => props.img}');
    position: relative;
    margin: auto;
`;

export const Info = styled.div`
    width: 90%;
    border: 1px solid black;
    margin: auto;
    height: 57%;
    font-family: 'Teko';
`;