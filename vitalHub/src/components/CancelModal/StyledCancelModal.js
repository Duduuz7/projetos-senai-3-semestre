import styled from 'styled-components/native';


export const ContainerModal = styled.View`
position: absolute;

width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
position: fixed;

left: 0;
right: 0;
bottom: 0;
z-index: 50;
background-color: white;
padding: 20px;
border-radius: 10px;
width: 90%;
height: 310px;
justify-content: space-around;
align-items: center;
`;