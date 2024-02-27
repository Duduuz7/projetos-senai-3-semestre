import styled, { css } from "styled-components";


export const InputText = styled.TextInput`
width:80%;
border:2px solid #49B3BA;
font-family: MontserratAlternates_600SemiBold;
color: #49B3BA;
border-radius: 10px;
padding: 20px;
margin-top: 10px;
margin-bottom: 5px;
font-size: 18px;
`

export const InputNumeric = styled.TextInput`
text-align: center;
width:65px;
height: 62px;
border:2px solid #77CACF;
font-family: MontserratAlternates_600SemiBold;
color: #34898F;
border-radius: 10px;
padding: 20px;
margin-top: 10px;
margin-bottom: 5px;
font-size: 18px;
`

export const InputProfile = styled.TextInput`

background-color: #F5F3F3;
padding-left: 15px;
text-align: left;
width:90%;
height: 55px;
border:1px solid #F5F3F3;
font-family: MontserratAlternates_500Medium;
color: #33303E;
border-radius: 8px;
/* padding: 20px;
margin-top: 10px;
margin-bottom: 5px; */
font-size: 16px;
align-self: center;
`
export const InputHigh = styled(InputText)`
    padding-bottom: 82px;
    height: 125px;
    width: 90%;
`

export const InputTextLarge = styled(InputText)`
    width: 90%;
`

export const InputTextLargeModal = styled(InputText)`
    width: 100%;
    text-transform: capitalize;
    font-size: 16px;
`

export const InputPrescription = styled(InputProfile)`
    
`


// export const InputSelect = styled.RNPickerSelect`

// ` 

export const InputTextLargePrescription = styled(InputText)`
background-color: #F5F3F3;
width: 100%;
border: 1px solid #F5F3F3;
font-size: 14px;
`


export const InputHighPrescription = styled(InputText)`
    padding-bottom: 82px;
    height: 125px;
    width: 100%;
    font-size: 14px;
    color: #4E4B59;
    border: 1px solid #F5F3F3;
    background-color: #F5F3F3;
    
`

export const InputHighPrescriptionImage = styled(InputText)`

/* align-items: center; */
text-align: center;
height: 111px;
width: 100%;
border: 1px solid #F5F3F3;
font-size: 14px;
background-color: #F5F3F3;

`