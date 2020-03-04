import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 320px;
    border-radius: 10px;
    margin: 10px auto;
    cursor: pointer;
    box-shadow: inset 0 0 6px;

`;

export const Info = styled.div`

  display: flex;
  height: 20%;
  background: #7B7167;
  border-radius: 0 0 10px 10px;
  user-select: none;
    
  h1 {
    font-size: 30px;
    width: 70%;
    text-transform: uppercase;
    border-right: 1.5px solid black;
  }

  h2 {
    font-size: 20px;
    width: 30%;
    text-align: center;
    margin: auto;
    text-decoration: none;
  }

  * {
    text-align: center;
    margin: auto;
    font-family: 'Piedra';
    text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
    color: #800000;
  }

`;

export const Cenario = styled.div`
    
    width: 100%;
    height: 80%;

`;