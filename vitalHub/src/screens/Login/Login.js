
import { Title } from "../../components/Title/StyleTitle"
import { Container } from "../../components/Container/StyleContainer"
import { Logo } from "../../components/Logo/StyleLogo"
import { Input } from "../../components/Input/Input"
import { LinkMedium } from "../../components/TextMedium/TextMedium"
import { LinkAccount } from "../../components/Link/Link"

import { ButtonGoogle, ButtonNormal } from "../../components/Button/Button"
import { StatusBar } from "react-native"

export const Login = ({navigation}) => {
    return (

        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

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

            <LinkMedium textLink={"Esqueceu sua senha ?"} onPress={() => navigation.navigate("ForgotPassword")} />

            <ButtonNormal text={"Entrar"}/>

            <ButtonGoogle text={"Entrar com Google"}/>

            <LinkAccount onPress={() => navigation.navigate("CreateAccount")}/>

        </Container>
    )
}