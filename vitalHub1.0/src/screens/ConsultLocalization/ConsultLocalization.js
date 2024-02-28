import { Container, ContainerCepCidade } from "../../components/Container/StyleContainer"
import { AgeTextCard } from "../../components/Descriptions/StyledDescriptions"
import { MapImage } from "../../components/Images/StyleImages"
import { InputBox } from "../../components/InputBox/InputBox"
import { Title, TitleLocalization } from "../../components/Title/StyleTitle"


export const ConsultLocalization = () => {

    return (

        <Container>

            <MapImage source={require('../../assets/MapImage.png')} />

            <TitleLocalization>Clínica Natureh</TitleLocalization>

            <AgeTextCard>São Paulo, SP</AgeTextCard>

            <InputBox
                placeholderTextColor={"#33303E"}
                textLabel={"Endreço"}
                placeholder={"Ex. Rua Vicenso Silva, 58"}
                // keyboardType="numeric"
                editable={true}
                fieldWidth={90}
            />

            <ContainerCepCidade>
                <InputBox
                    placeholderTextColor={"#33303E"}
                    textLabel={"Número"}
                    placeholder={"Ex. 570"}
                    keyboardType="numeric"
                    editable={true}
                    fieldWidth={40}
                />
                <InputBox
                    placeholderTextColor={"#33303E"}
                    textLabel={"Bairro"}
                    placeholder={"Ex. Vila Ema"}
                    editable={true}
                    fieldWidth={40}
                />
            </ContainerCepCidade>

        </Container>

    )

}