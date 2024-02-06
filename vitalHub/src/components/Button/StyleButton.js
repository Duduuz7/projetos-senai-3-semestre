import styled, { css } from "styled-components";


export const NormalButton= styled.TouchableOpacity`
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
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: #fff;
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