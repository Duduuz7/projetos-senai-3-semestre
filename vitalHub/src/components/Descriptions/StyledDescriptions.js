import styled from "styled-components"


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

export const CancelLessMargin = styled(CancelButton)`
    margin-top: 2px;
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

export const DoctorArea = styled(DescripritionForgot)`
    color: #8C8A97;
    font-size: 14px;
    height: 20px;   
    width: 49%;
    align-self: flex-start; 
    text-align: flex-start; 
    /* border: 1px solid black; */
`

export const RoutineTextCard = styled(AgeTextCard)`
    height: 20px;
    color: #8C8A97;
`

export const HourText = styled.Text`
    margin-top: 8px; 
    height: 30px;
    color: #49B3BA;
    font-size: 14px;
    font-family: Quicksand_600SemiBold;
`
export const HourTextGray = styled(HourText)`
    color: #4E4B59;
`

export const CancelCard = styled.Text`
    margin-top: 3%;
    /* margin-left: 32%; */
    font-family: MontserratAlternates_500Medium;
    color: #C81D25;
    font-size: 14px;
`

export const SeeMedicalRecord = styled(CancelCard)`
    color: #344F8F;
`
export const DescriptionCancel = styled.Text`
    margin-top: 15px;
    width: 90%;
    font-size: 16px;
    font-family: Quicksand_500Medium;
    color: #4E4B59;
    text-align: center;
`