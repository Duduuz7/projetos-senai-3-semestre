import { StatusBar } from "react-native"
import { Container } from "../../components/Container/StyleContainer"
import { TitleSelect } from "../../components/Title/StyleTitle"


export const SelectDate = () => {

    return (

        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <TitleSelect>Selecionar Data</TitleSelect>
            
            

        </Container>

    )

}