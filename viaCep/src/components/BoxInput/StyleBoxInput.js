import styled from "styled-components";

//Component que Possui label e input
export const FieldContent = styled.View`

/* Define o valor da Largura de acordo com o valor da props */
width:${props => `${props.fieldWidth}%`};

margin-top:20px;

margin-left:35px;

`