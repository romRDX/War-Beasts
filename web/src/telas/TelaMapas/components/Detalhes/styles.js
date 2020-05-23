import styled from 'styled-components';



export const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-right: 1px solid black;

    
    .voltar {
        position: absolute;
        top: 0%;
        left: 0%;
        padding: 15px 17px;
        border: 1px solid black;
        background: white;
        border-radius: 0px 0 10px 0;
        text-decoration: none;
        font-family: 'Piedra';
        text-shadow: 3px 0 0 lightgray, -3px 0 0 lightgray, 0 3px 0 lightgray, 0 -3px 0 lightgray, 2px 2px lightgray, -2px -2px 0 lightgray, 2px -2px 0 lightgray, -2px 2px 0 lightgray;
        background: #7B7167;
        color: #800000;

        &:hover {
            color: red;
            box-shadow: inset 0px 0px 8px 1px black;
        }
    }
`;

export const Botao = styled.button`

  position: absolute;
  border: 1px solid black;
  margin: 10px auto 30px;
  padding: 10px 0;
  font-size: 20px;
  border-radius: 10px;
  font-family: 'Piedra';
  -webkit-text-decoration: none;
  text-decoration: none;
  text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
  background: #7B7167;
  color: #800000;
  box-shadow: 0px 0px 2px 1.5px black;
  
  

  &:hover {
    color: red;
    box-shadow: inset 0px 0px 8px 1px black;
  }
`;

export const Portrait= styled.div`
    width: 90%;
    border: 1px solid black;
    margin: auto;
    height: 27%;
`;

export const Info = styled.div`
    width: 90%;
    border: 1px solid black;
    margin: auto;
    height: 57%;
`;