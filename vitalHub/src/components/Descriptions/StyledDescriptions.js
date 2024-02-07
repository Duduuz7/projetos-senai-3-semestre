import styled from "styled-components"


export const DescripritionForgot = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #5F5C6B;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 15px;
`

export const DescripritionEmail = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #4E4B59;
    text-align: center; 
`

export const EmailText = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #496BBA;
    margin-right: auto;


`

export const ResendCode = styled(EmailText)`
    text-decoration: underline;
    color: #344F8F;
    font-family: MontserratAlternates_600SemiBold;
    margin-top: 33px;
    margin-left: 33%;
`

export const CancelButton = styled(ResendCode)`
    text-decoration: underline;
    color: #344F8F;
    font-family: MontserratAlternates_600SemiBold;
    margin-top: 40px;
    margin-left: 40%;
`