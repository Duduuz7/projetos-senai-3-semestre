import { ButtonLargeSelect } from "../Button/Button";
import { CancelLessMargin, DescriptionCancel } from "../Descriptions/StyledDescriptions";
import { Title, TitleModal } from "../Title/StyleTitle";
import { ContainerModal, ModalContent } from "./StyledCancelModal";

export const CancelModal = ({ isOpen, onClose  }) => {

    if (!isOpen) {
        return null;
    }

    return(

        <ContainerModal>

            <ModalContent>

                <TitleModal>Cancelar Consulta</TitleModal>
                
                <DescriptionCancel>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</DescriptionCancel>

                <ButtonLargeSelect text={"Continuar"} />

                <CancelLessMargin>Cancelar</CancelLessMargin>

            </ModalContent>

        </ContainerModal>

    )

}