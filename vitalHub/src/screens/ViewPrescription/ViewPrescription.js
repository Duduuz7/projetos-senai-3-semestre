import { BoxAgeEmail, Container, ScrollContainer } from "../../components/Container/StyleContainer"
import { DescriptionPassword } from "../../components/Descriptions/Descriptions"
import { DescripritionPrescription } from "../../components/Descriptions/StyledDescriptions"
import { ImagemPerfilPaciente } from "../../components/Images/StyleImages"
import { HighInputBoxPrescription, HighInputBoxPrescriptionImage, LargeInputBoxModal, LargeInputBoxPrescription, LargeInputTextBoxPrescription } from "../../components/InputBox/InputBox"


import { TitleProfile } from "../../components/Title/StyleTitle"

import { AntDesign } from "@expo/vector-icons";

export const ViewPrescription = () => {

    return (

        <ScrollContainer>

            <Container>

                <ImagemPerfilPaciente source={require('../../assets/ney.webp')} />

                <TitleProfile>Dr. Neymar Jr</TitleProfile>

                <BoxAgeEmail>

                    <DescripritionPrescription>Clínico Geral</DescripritionPrescription>
                    <DescripritionPrescription>CRM-15286</DescripritionPrescription>

                </BoxAgeEmail>

                <LargeInputBoxPrescription
                        fieldWidth={90}
                        placeholderTextColor={"#34898F"}
                        textLabel={"Informe a localização desejada"}
                        placeholder={"Informe a localização"}
                        editable={true}
                    />

                

            </Container>

        </ScrollContainer>

    )

}