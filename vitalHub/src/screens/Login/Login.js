
import { Title } from "../../components/Title/StyleTitle"
import { ButtonText, ButtonTextGoogle } from "../../components/ButtonText/StyleButtonText"
import { Container } from "../../components/Container/StyleContainer"
import { Logo } from "../../components/Logo/StyleLogo"
import { Input } from "../../components/Input/Input"
import { LinkMedium } from "../../components/TextMedium/TextMedium"
import { GoogleButton, NormalButton } from "../../components/Button/StyleButton"
import { LinkAccount } from "../../components/Link/Link"

import { AntDesign } from '@expo/vector-icons';

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
                secureTextEntry={true}
            />

            <LinkMedium textLink={"Esqueceu sua senha ?"} url="" />

            <NormalButton>
                <ButtonText>Entrar</ButtonText>
            </NormalButton>

            <GoogleButton>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTextGoogle>Entrar com Google</ButtonTextGoogle>
            </GoogleButton>

            <LinkAccount />

        </Container>
    )
}