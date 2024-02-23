import { Modal } from "react-native"
import { ButtonLargeModal, ButtonLargeSelect, SmallButtonModal } from "../Button/Button"
import { SmallButton } from "../Button/StyleButton"
import { ButtonHomeContainer, ButtonModalContainer } from "../Container/StyleContainer"
import { LargeInputBoxModal, LargeInputTextBox } from "../InputBox/InputBox"
import { InputLabelModal, LabelButtonModal } from "../Label/StyleLabel"
import { TitleModal, TitleModalSchedule } from "../Title/StyleTitle"
import { ModalContent, ScheduleModalContainer } from "./StyleScheduleModal"
import { CardCancelLess } from "../Descriptions/Descriptions"


export const ScheduleModal = ({
    visible,
    setShowModal = null,
    ...rest
}) => {
    return (

        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >

            <ScheduleModalContainer>

                <ModalContent>

                    <TitleModalSchedule>Agendar Consulta</TitleModalSchedule>

                    <LabelButtonModal>Qual o nível da consulta</LabelButtonModal>

                    <ButtonModalContainer>

                        <SmallButtonModal text={'Rotina'} />
                        <SmallButtonModal text={'Exame'} />
                        <SmallButtonModal text={'Urgência'} />

                    </ButtonModalContainer>

                    <LargeInputBoxModal
                        fieldWidth={100}
                        placeholderTextColor={"#34898F"}
                        textLabel={"Informe a localização desejada"}
                        placeholder={"Informe a localização"}
                        editable={true}
                    />

                    <ButtonLargeModal onPress={''} text={"Continuar"} />

                    <CardCancelLess onPressCancel={() => setShowModal(false)} text={"Cancelar"} />

                </ModalContent>

            </ScheduleModalContainer>

        </Modal>

    )
}