import { ViewBoxCode } from "../Container/StyleContainer";
import {DescripritionEmail, DescripritionForgot, EmailText, ResendCode } from "./StyledDescriptions";

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