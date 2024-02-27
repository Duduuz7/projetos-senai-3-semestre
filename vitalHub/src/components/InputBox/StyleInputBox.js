import styled from "styled-components";

export const BoxInput = styled.View`

width:${props => `${props.fieldWidth}%`};
height:${props => `${props.fieldHeigh}px`};
align-items: center;

gap: 8px;

margin-top:15px;

`

export const FieldContent = styled.View`
    width: ${props => `${props.fieldWidth}%`} ;
    margin-top: 10px; 
    width: 100%;  
`