import { ButtonNormal } from '../../components/Button/Button'
import { NormalButton } from '../../components/Button/StyleButton'
import { ButtonText } from '../../components/ButtonText/StyleButtonText'
import { Container } from '../../components/Container/StyleContainer'
import { DescriptionPassword } from '../../components/Descriptions/Descriptions'
import { Input } from '../../components/Input/Input'
import { Cancel } from '../../components/Link/Link'
import { Logo } from '../../components/Logo/StyleLogo'
import { Title } from '../../components/Title/StyleTitle'


export const CreateAccount = ({ navigation }) => {

    return (

        <Container>

            <Logo source={require('../../assets/VitalHub_Logo1.png')} />

            <Title>Criar Conta</Title>

            <DescriptionPassword description={"Insira seu endereço de e-mail e senha para realizar seu cadastro."} />

            <Input
                placeholder={"Usuário ou E-mail"}
                placeholderTextColor={'#49B3BA'}
            />
            <Input
                placeholder={"Senha"}
                placeholderTextColor={'#49B3BA'}
                secureTextEntry={true}
            />
            <Input
                placeholder={"Confirmar senha"}
                placeholderTextColor={'#49B3BA'}
                secureTextEntry={true}
            />

            <ButtonNormal text={"Cadastrar"} />

            <Cancel onPress={() => { navigation.navigate("Login") }} />

        </Container>
    )

}