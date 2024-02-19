import { BlockedButton, ButtonNormal } from "../../components/Button/Button"
import { BoxAgeEmail, Container, ScrollContainer } from "../../components/Container/StyleContainer"
import { DescriptionPassword } from "../../components/Descriptions/Descriptions"
import {  CancelButtonRecords } from "../../components/Descriptions/StyledDescriptions"
import { HighInputBox, LargeInputTextBox } from "../../components/InputBox/InputBox"
import { ImagemPerfilPaciente } from "../../components/Images/StyleImages"
import { TitleProfile } from "../../components/Title/StyleTitle"



export const MedicalRecords = () => {
    return (

        <ScrollContainer>

            <ImagemPerfilPaciente source={require('../../assets/ney.webp')} />

            <Container>


                <TitleProfile>Neymar Jr</TitleProfile>

                <BoxAgeEmail>

                    <DescriptionPassword description={"22 anos"} />
                    <DescriptionPassword description={"neymar.jr@gmail.com"} />

                </BoxAgeEmail>



                <HighInputBox
                    fieldHeight={350}
                    placeholderTextColor={"#34898F"}
                    textLabel={"Descrição da consulta"}
                    placeholder={"Descrição"}
                    editable={true}
                />

                <LargeInputTextBox
                    placeholderTextColor={"#34898F"}
                    textLabel={"Diagnóstico do paciente"}
                    placeholder={"Diagnóstico"}
                    editable={true}
                />

                <HighInputBox
                    fieldHeight={350}
                    placeholderTextColor={"#34898F"}
                    textLabel={"Prescrição médica"}
                    placeholder={"Prescriçao médica"}
                    editable={true}
                />

                <ButtonNormal text={"Salvar"}/>

                <BlockedButton text={"Editar"}/>

                <CancelButtonRecords>Cancelar</CancelButtonRecords>

            </Container>

        </ScrollContainer>

    )
}