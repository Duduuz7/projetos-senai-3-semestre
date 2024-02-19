import { StatusBar } from "react-native"
import { Container, ScrollContainer } from "../../components/Container/StyleContainer"
import {TitleSelect } from "../../components/Title/StyleTitle"
import { CardSelectDoctor } from "../../components/Cards/Cards"
import { ButtonLarge, ButtonLargeSelect } from "../../components/Button/Button"
import { CancelLessMargin } from "../../components/Descriptions/StyledDescriptions"


export const SelectDoctor = () => {

    return (

        <ScrollContainer>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <Container>

                <TitleSelect>Selecionar Médico</TitleSelect>

                <CardSelectDoctor doctorArea={'Dermatóloga, Esteticista'} url={require('../../assets/DermaImage.png')} name={'Dr Alessandra'}/>

                <CardSelectDoctor doctorArea={'Cirurgião, Cardiologista'} url={require('../../assets/DermaImage.png')} name={'Dr Kumushiro'}/>

                <CardSelectDoctor doctorArea={'Clínico, Pediatra'} url={require('../../assets/DermaImage.png')} name={'Dr Rodrigo Santos'}/>

                <ButtonLargeSelect text={"Continuar"} />

                <CancelLessMargin>Cancelar</CancelLessMargin>

            </Container>

        </ScrollContainer>

    )

}