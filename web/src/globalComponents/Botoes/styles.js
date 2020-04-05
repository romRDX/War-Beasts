import styled from 'styled-components';

export const Botao = styled.button`
  display: block;
  user-select: none;
  border: 1px solid black;
  border-radius: 10px;
  font-family: 'Piedra';
  -webkit-text-decoration: none;
  text-decoration: none;
  text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
  background: #7B7167;
  color: #800000;
  padding: ${ props => props.theme.padd ? props.theme.padd : 0 };
  font-size: ${ props => props.theme.fontSize ? props.theme.fontSize : '17px' };
  margin: ${ props => props.theme.margin ? props.theme.margin : 'auto' };
  box-shadow: ${ props => props.theme.boxShadow ? props.theme.boxShadow : '0px 0px 2px 1.5px black'};
  width: ${ props => props.theme.size ? props.theme.size[0] : '5' }%;
  height: ${ props => props.theme.size ? props.theme.size[1]+'%' : '6.5%' };
  
  &:hover {
    color: red;
    box-shadow: inset 0px 0px 8px 1px black;
  }

  a {
    color: #800000;
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    text-decoration: none;
    padding: ${ props => props.theme.paddA ? props.theme.paddA : 0 };

    &:hover {
      color: red;
    }
  }
`;

export const BotaoVoltar = styled(Botao)`
  padding: 0;
  position: absolute;
  border-radius: 0 0 10px 0;
  z-index: 1;
  top: ${ props => props.theme.pos ? props.theme.pos[0] : '0' }%;
  left: ${ props => props.theme.pos ? props.theme.pos[1] : '0'}%;
  box-shadow: ${ props => props.theme.boxShadow ? props.theme.boxShadow : 'none'};

  a {
    padding: 17% 0 0 0;
  }
`;
