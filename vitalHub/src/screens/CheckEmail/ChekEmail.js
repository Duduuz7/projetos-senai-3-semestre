import { NormalButton } from "../../components/Button/StyleButton"
import { ButtonText } from "../../components/ButtonText/StyleButtonText"
import { BoxNumeric, Container, ViewBoxCode, ViewBoxMedium } from "../../components/Container/StyleContainer"
import { EmailDescription, ResendDescription } from "../../components/Descriptions/Descriptions"
import { ResendCode } from "../../components/Descriptions/StyledDescriptions"
import { NumericInput } from "../../components/Input/Input"
import { Close, Logo } from "../../components/Logo/StyleLogo"
import { Title } from "../../components/Title/StyleTitle"


export const CheckEmail = () => {
    return (

        <Container>

            <Close source={require('../../assets/x-top-screen.png')}/>

            <Logo source={require('../../assets/VitalHub_Logo1.png')} />

            <Title>Verifique seu e-mail</Title>

            <EmailDescription />

            <BoxNumeric>
                <NumericInput placeholder={"0"} placeholderTextColor={"#34898F"} />
                <NumericInput placeholder={"0"} placeholderTextColor={"#34898F"} />
                <NumericInput placeholder={"0"} placeholderTextColor={"#34898F"} />
                <NumericInput placeholder={"0"} placeholderTextColor={"#34898F"} />
            </BoxNumeric>

            <NormalButton>
                <ButtonText>Entrar</ButtonText>
            </NormalButton>

            <ResendCode>Reenviar Código</ResendCode>

        </Container>

    )
}
