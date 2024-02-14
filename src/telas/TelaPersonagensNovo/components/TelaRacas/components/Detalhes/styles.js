import styled from 'styled-components';


export const Container = styled.div`
 
    width: 40%;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;

    h1 {
        text-align: center;
        padding: 2% 0 0 0;
        font-size: 50px;
        height: 8%;
        font-family: 'Teko';
        background: red;
        width: 100%;
    }
`;

export const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 10%;
    padding-bottom: 20px;
`;

export const Descricao = styled.div`
    width: 90%;
    height: 40%;
    border: 1px solid black;
    margin: auto;
    padding: 10px;
`;

export const Nome = styled.input`
    margin: auto;
    width: 50%;
`;