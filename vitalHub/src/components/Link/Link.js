import { TextLink, TextLinkAccount } from "./StyleLink"

export const LinkAccount = ({
    url
}) => {
    return(
        <TextLink>Não tem uma conta? <TextLinkAccount onPress={() => {Linking.openURL(`${url}`)}}>Crie uma conta agora!</TextLinkAccount></TextLink>
    )
}

