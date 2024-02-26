import { StatusBar } from "react-native"
import { Container } from "../../components/Container/StyleContainer"
import { TitleSelect } from "../../components/Title/StyleTitle"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { ButtonLargeSelect } from "../../components/Button/Button"
import { CardCancelLess } from "../../components/Descriptions/Descriptions"
import { InputSelect } from "../../components/InputSelect/InputSelect"
import { Label, LabelSelect } from "../../components/Label/Label"
import { ConfirmAppointmentModal } from "../../components/ConfirmAppointmentModal/ConfirmAppointmentModal"
import { useState } from "react"


export const SelectDate = () => {

    const [showModal, setShowModal] = useState(false);

    return (

        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarComponent />

            <LabelSelect textLabel={"Selecione um horário disponível"} />

            <InputSelect />

            <ButtonLargeSelect onPress={() => setShowModal(true)} text={"Continuar"} />

            <CardCancelLess onPressCancel={() => setShowModal(false)}  text={"Cancelar"} />

            <ConfirmAppointmentModal
                visible={showModal}
                setShowModal={setShowModal}
            />

        </Container>

    )

}