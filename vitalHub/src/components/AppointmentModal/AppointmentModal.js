import { Modal } from "react-native"
import { ButtonLargeConfirmModal, ButtonLargeModal, ButtonLargeSelect } from "../Button/Button"
import { ModalContent, PatientModal } from "../CancellationModal/StyleCancelationModal"
import { CardCancelLess } from "../Descriptions/Descriptions"
import { DescriptionModalRecord } from "../Descriptions/StyledDescriptions"
import { ImageModalRecord } from "../Images/StyleImages"
import { TitleModal, TitleModalRecord } from "../Title/StyleTitle"
import { BoxAgeEmailModal } from "./StyleAppointmentModal"


export const AppointmentModal = ({
    visible,
    setShowModalAppointment = null,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade">
                
            <PatientModal>

                <ModalContent>

                    <ImageModalRecord source={require('../../assets/ImageModalRecord.png')} />

                    <TitleModalRecord>Niccole Sarga</TitleModalRecord>

                    <BoxAgeEmailModal>

                        <DescriptionModalRecord>22 anos</DescriptionModalRecord>
                        <DescriptionModalRecord>niccole.sarga@gmail.com</DescriptionModalRecord>

                    </BoxAgeEmailModal>

                    <ButtonLargeConfirmModal text={"Inserir Prontuário"} />

                    <CardCancelLess onPressCancel={() => setShowModalAppointment(false)} text={"Cancelar"} />

                </ModalContent>

            </PatientModal>

        </Modal>
    )
}