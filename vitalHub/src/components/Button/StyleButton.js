import styled, { css } from "styled-components";


export const NormalButton= styled.TouchableOpacity`
    margin-top: 32px;
    border-radius: 8px;
    width: 80%;
    background-color: #496BBA;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #496BBA;
    `

export const GoogleButton= styled(NormalButton)`
    margin-top: 20px; 
    gap: 27px;
    justify-content: center;
    flex-direction: row;
    background-color: #fff;
`

export const LargeButton= styled(NormalButton)`
    width: 91%;
    height: 52px;
    margin-top: 0px;
    margin-bottom: 30px;
`
export const ButtonBlocked = styled(NormalButton)`
    background-color: #ACABB7;
    border-color: #ACABB7;
    margin-top: 33px;
`
export const SmallButtonBlocked = styled(NormalButton)`
    background-color: #ACABB7;
    border-color: #ACABB7;
    width: 50%;
    margin-bottom: 40px;
    margin-top: 3px;
`

export const ButtonHome = styled.TouchableOpacity`
    width: 110px;
    justify-content: center;
    height: 40px;
    background-color: #496BBA;
    border: 1px solid #496BBA;
    border-radius: 5px;
    margin-top: 35px;
    margin-bottom: 10px;
`

export const WhiteButtonHome = styled(ButtonHome)`
    background-color: #FBFBFB;
    border: 2px solid #607EC5;
`
export const LargeButtonSelect= styled(LargeButton)`
    width: 91%;
    height: 52px;
    margin-top: 30px;
    margin-bottom: 25px;
`