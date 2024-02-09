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


// button: {
//     borderRadius: 8,
//     backgroundColor: reversed ? '#fff' : '#496BBA',
//     width: '100%',
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: reversed ? '#496BBA' : '#fff',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   buttonText: {
//     color: reversed ? '#496BBA' : '#fff',
//     textTransform: 'uppercase',
//     fontWeight: '500',
//     fontSize: 16,