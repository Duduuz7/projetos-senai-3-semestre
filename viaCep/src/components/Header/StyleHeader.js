import styled from "styled-components"

export const ContainerHeader = styled.View`
    height: 20%;
    background-color: #FF99CC;
    border-radius: 0px 0px 22px 22px;
    elevation: 10px; 
    justify-content: center;
    align-items: center;
    
   /* box-shadow android */
    /* shadow-color: 'black';
    shadow-opacity: 0.26;
    shadow-offset: 2px 8px;
    shadow-radius: 10px;  */
   
`

export const SafeContainer = styled.SafeAreaView`
    margin-top: 30px; 
`

export const MainTitle = styled.Text`
    font-size: 24px;
    color: #333E33;
    font-family: Roboto_500Medium;
`