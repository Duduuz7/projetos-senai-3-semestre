import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fafafa;
`

export const ViewBoxMedium = styled.SafeAreaView`
    width:80%;
    align-items: flex-start;
`
export const BoxNumeric = styled.SafeAreaView`
    width: 80%;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-between;
`

export const ScrollContainer = styled.ScrollView`
    height: 100%;
    width: 100%;
    background-color: #fafafa;
`

export const ContainerCepCidade = styled.SafeAreaView`
    margin-bottom: 3px;
    width: 100%;
    background-color: #fafafa;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 50px;
    margin-bottom: 35px;
`

export const BoxAgeEmail = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2px;
    margin-right: 35px;
    margin-left: 35px;
`

export const BoxDataHome = styled.SafeAreaView`

    flex-direction: column;

    width: 120px;
    height: 55px;

    align-items: center;

    
    margin-top: 26%; 
    
`

export const BoxHome = styled.SafeAreaView`
    width: 200px;
    height: 100%;
    flex-direction: row;
  
    margin-bottom: 8%;
    margin-right: 33%;
`

export const MoveIconBell = styled.SafeAreaView`

    width: 35px; 
    height: 35px;
    margin-top:9%;

  
   align-items: center;
   
`

export const ButtonHomeContainer = styled.SafeAreaView`
    width:100%;
    margin-left: 9%;
    flex-direction: row;
    gap: 15px;
`

export const BoxCard = styled.SafeAreaView`
    flex-direction: row;
    width: 100%;

    /* border: 1px solid black; */
    align-items: flex-start;
`
export const BoxTextCard = styled.SafeAreaView`
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const BoxTextDoctorCard = styled(BoxTextCard)`
    margin-left: 10px;
`

export const BoxDateCancel = styled.SafeAreaView`
    width: 71%;
    height: 30px;
    justify-content: space-between;;
    flex-direction: row;
`
export const FlatContainer = styled.FlatList`
width: 100%;
`