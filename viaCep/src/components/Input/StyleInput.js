import styled, { css } from "styled-components";

export const InputText = styled.TextInput`

width:100%;
border:2px solid #a1a1a1;
font-family: "Roboto_500Medium";
color: black;
border-radius: 10px;
padding: 20px;
margin-top: 10px;
font-size: 18px;


${props => props.editable && css`
background-color: #F6F6F6; 
`}`