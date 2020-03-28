import styled from 'styled-components';


export const Conteiner = styled.div`
  max-width: 40%;
  height: 100%;
  width: 100%;
  height: inherit;
  border-right: 1px solid black;
  height: inherit;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;

  h1 {
    text-align: center;
  }

  .novoPersonagem {
    margin: auto;
    text-decoration: none;
    text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
    background: #7B7167;
    color: #800000;
    box-shadow: 0px 0px 2px 1.5px black;
    padding: 3% 4.5%;
    font-family: 'Piedra';
    font-size: 20px;
    border-radius: 10px;
    text-decoration: none;

    &:hover {
      color: red;
      box-shadow: inset 0px 0px 8px 1px black;
    }

  }
  
`;

export const Minis = styled.div`
    margin: 20px 0 0 0;
    height: 82%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    overflow-y: scroll;
`;


export const NovoPersonagem = styled.div`
  
`;