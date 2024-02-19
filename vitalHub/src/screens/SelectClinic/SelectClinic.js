import { ButtonLargeSelect } from "../../components/Button/Button"
import { LargeButtonSelect } from "../../components/Button/StyleButton"
import { Container, ScrollContainer } from "../../components/Container/StyleContainer"
import { CancelLessMargin } from "../../components/Descriptions/StyledDescriptions"
import { TitleSelect } from "../../components/Title/StyleTitle"


export const SelectCLinic = () => {

    return (

        <ScrollContainer>

            <Container>

                <TitleSelect>Selecionar clínica</TitleSelect>



                <ButtonLargeSelect text={"Continuar"}/>

                <CancelLessMargin>Cancelar</CancelLessMargin>

            </Container>

        </ScrollContainer>


    )

}