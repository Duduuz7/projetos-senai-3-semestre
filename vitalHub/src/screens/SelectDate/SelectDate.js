import { StatusBar } from "react-native"
import { Container } from "../../components/Container/StyleContainer"
import { TitleSelect } from "../../components/Title/StyleTitle"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { ButtonLargeSelect } from "../../components/Button/Button"
import { CardCancelLess } from "../../components/Descriptions/Descriptions"
import InputSelect from "../../components/InputSelect/InputSelect"


export const SelectDate = () => {

    return (

        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarComponent />

            <InputSelect/>

            <ButtonLargeSelect onPress={''} text={"Continuar"} />

            <CardCancelLess text={"Cancelar"} />

        </Container>

    )

}