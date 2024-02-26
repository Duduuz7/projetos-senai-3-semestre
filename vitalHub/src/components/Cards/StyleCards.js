import styled, { css } from "styled-components";


export const CardContainer = styled.TouchableOpacity`
    margin-top: 12px;
    align-self: center;
    align-itens: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    width: 90%;
    height: 106px;
    elevation: 0px;
    flex-direction: row;
`

export const CardContainerClinic = styled(CardContainer)`
    height: 85px;
    elevation: 4px;
`

export const AgeCard = styled.SafeAreaView`
    margin-left: 9%;
    margin-bottom: 0px;
    flex-direction: row;
    width: 100px;
    height: 30px;
    box-radius: 5px;
    align-items: center;
    justify-content: center;
`
export const BoxRate = styled.SafeAreaView`
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-left:65px;
    height: 22px;
    width: 45px;
`

// export const CardSelectDoctorContainer = styled(CardContainer)`

// `