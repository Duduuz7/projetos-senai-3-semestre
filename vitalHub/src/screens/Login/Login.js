import { Text } from "react-native"
import { Title } from "../../components/Title/StyleTitle"
import { ButtonText } from "../../components/ButtonText/StyleButtonText"
import { Container } from "../../components/Container/StyleContainer"
import { Logo } from "../../components/Logo/StyleLogo"
import { Input } from "../../components/Input/Input"
import { LinkMedium } from "../../TextMedium/TextMedium"

import { ButtonGoogle, ButtonNormal } from "../../components/Button/Button"



export const Login = () => {
    return (

        <Container>

            <Logo source={require('../../assets/VitalHub_Logo1.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder={"Usuário ou E-mail"}
                placeholderTextColor={'#49B3BA'}
            />

            <Input
                placeholder={"Senha"}
                placeholderTextColor={'#49B3BA'}
            />

            <LinkMedium textLink={"Esqueceu sua senha ?"} url=""/>

            <ButtonNormal>
                <ButtonText>Entrar</ButtonText>
            </ButtonNormal>

            <ButtonGoogle >
                <ButtonText>Entrar com Google</ButtonText>
            </ButtonGoogle>

            {/* <ContentAccount>
                <TextAccount>Não tem conta? Crie uma conta agora!</TextAccount>
            </ContentAccount> */}

        </Container>
    )
}