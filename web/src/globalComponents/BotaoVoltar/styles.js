import styled from 'styled-components';

export const Botao = styled.div`
  position: absolute;
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

  * {
    width: 100%;
    height: 100%;
  }
    
`;