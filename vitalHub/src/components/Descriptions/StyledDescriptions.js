import styled from "styled-components"
import { DescriptionPassword } from "./Descriptions"


export const DescripritionForgot = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #5F5C6B;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 15px;
    align-self: center;
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


export const CancelButtonRecords = styled(CancelButton)`
    margin-top:25px;
    margin-bottom: 40px;
    `

export const AgeTextCard = styled(DescripritionForgot)`
    color: #8C8A97;
    font-size: 14px;
    height: 18px;
`

export const RoutineTextCard = styled(AgeTextCard)`
    color: #8C8A97;
`

export const HourText = styled.Text`
    margin-top: 8px; 
    height: 30px;
    color: #49B3BA;
    font-size: 14px;
    font-family: Quicksand_600SemiBold;
`

export const CancelCard = styled.Text`
    margin-top: 3%;
    margin-left: 32%;
    font-family: MontserratAlternates_500Medium;
    color: #C81D25;
    font-size: 14px;
`
   