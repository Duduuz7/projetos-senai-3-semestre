import { Modal } from "react-native"
import { ButtonLargeConfirmModal, ButtonLargeModal, ButtonLargeSelect } from "../Button/Button"
import { ModalContent, PatientModal } from "../CancellationModal/StyleCancelationModal"
import { CardCancelLess } from "../Descriptions/Descriptions"
import { DescriptionModalRecord } from "../Descriptions/StyledDescriptions"
import { ImageModalRecord } from "../Images/StyleImages"
import { TitleModal, TitleModalRecord } from "../Title/StyleTitle"
import { BoxAgeEmailModal } from "./StylePatientAppointmentModal"



export const PatientAppointmentModal = ({
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

                    <ImageModalRecord source={require('../../assets/CardRecordPatient(doctorImage).png')} />

                    <TitleModalRecord>Dr Claudio</TitleModalRecord>

                    <BoxAgeEmailModal>

                        <DescriptionModalRecord>Clínico Geral</DescriptionModalRecord>
                        <DescriptionModalRecord>CRM-15286</DescriptionModalRecord>

                    </BoxAgeEmailModal>

                    <ButtonLargeConfirmModal text={"Ver Local da Consulta"} />

                    <CardCancelLess onPressCancel={() => setShowModalAppointment(false)} text={"Cancelar"} />

                </ModalContent>

            </PatientModal>

        </Modal>
    )
}