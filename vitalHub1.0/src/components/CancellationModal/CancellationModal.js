import { Modal } from "react-native"
import { TitleModal, TitleModalRecord } from "../Title/StyleTitle"
import { DescriptionCancel } from "../Descriptions/StyledDescriptions"
import { ButtonLargeSelect } from "../Button/Button"
import { CardCancelLess } from "../Descriptions/Descriptions"
import { ModalContent, PatientModal } from "./StyleCancelationModal"

export const CancellationModal = ({ 
    visible,
    setShowModalCancel = null,
    ...rest
}) => {
    return(

        <Modal 
        {...rest } 
        visible={visible} 
        transparent={true} 
        animationType="fade"
        >

            {/* container */}
            <PatientModal>

                <ModalContent>

                        <TitleModal>Cancelar Consulta</TitleModal>

                        <DescriptionCancel>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</DescriptionCancel>

                        <ButtonLargeSelect onPress={''} text={"Continuar"}/>

                        <CardCancelLess onPressCancel={() => setShowModalCancel(false)} text={"Cancelar"}/>

                </ModalContent>

            </PatientModal>

        </Modal>

    )
}