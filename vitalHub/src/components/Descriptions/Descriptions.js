import { ViewBoxCode } from "../Container/StyleContainer";
import {CancelCard, DescripritionEmail, DescripritionForgot, EmailText, ResendCode, SeeMedicalRecord } from "./StyledDescriptions";

export const DescriptionPassword = ({ description }) => {

    return (
        <DescripritionForgot>
            {description}
        </DescripritionForgot>
    )
}

export const EmailDescription = () => {

    return(

        <DescripritionEmail>Digite o código de 4 dígitos enviado para <EmailText>username@email.com</EmailText></DescripritionEmail>

    )

}


export const CodeResend = ({
    text,
    onPress
}) => {

    return(

        <ResendCode onPress={onPress}>{text}</ResendCode>

    )

}

export const SeeRecord = ({ onPressAppointment, text }) => {

    return(

        <SeeMedicalRecord onPress={onPressAppointment}>{text}</SeeMedicalRecord>

    )

}

export const CardCancel = ({ onPressCancel, text }) => {

    return(

        <CancelCard onPress={onPressCancel}>{text}</CancelCard>

    )

}