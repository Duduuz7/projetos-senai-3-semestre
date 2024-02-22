import { StatusBar } from "react-native"
import { Container, FlatContainerSelect, ScrollContainer } from "../../components/Container/StyleContainer"
import { TitleSelect } from "../../components/Title/StyleTitle"
import { CardSelectDoctor } from "../../components/Cards/Cards"
import { ButtonLarge, ButtonLargeSelect } from "../../components/Button/Button"
import { CancelLessMargin } from "../../components/Descriptions/StyledDescriptions"


export const SelectDoctor = () => {

    const image = require("../../assets/ImageCard.png");
    const dataItens = [
        {
            id: 'fsdfsfsdf',
            doctorArea: 'Dermatóloga, Esteticista',
            image: image,
            name: 'Dr Alessandra'
        },
        {
            id: 'fsdfsf',
            doctorArea: 'Cirurgião, Cardiologista',
            image: image,
            name: 'Dr Kumushiro'
        },
        {
            id: 'fsdf',
            doctorArea: 'Clínico, Pediatra',
            image: image,
            name: 'Dr Rodrigo Santos'
        },
    ]

    return (

        <ScrollContainer>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <Container>

                <TitleSelect>Selecionar Médico</TitleSelect>

                <FlatContainerSelect
                    data={dataItens}
                    renderItem={({ item }) =>
                        <CardSelectDoctor doctorArea={item.doctorArea} name={item.name} url={image} />}
                    keyExtractor={item => item.id}

                    showsVerticalScrollIndicator={false}
                />

                {/* <CardSelectDoctor doctorArea={'Dermatóloga, Esteticista'} url={require('../../assets/DermaImage.png')} name={'Dr Alessandra'} />

            <CardSelectDoctor doctorArea={'Cirurgião, Cardiologista'} url={require('../../assets/DermaImage.png')} name={'Dr Kumushiro'} />

            <CardSelectDoctor doctorArea={'Clínico, Pediatra'} url={require('../../assets/DermaImage.png')} name={'Dr Rodrigo Santos'} /> */}

                <ButtonLargeSelect text={"Continuar"} />

                <CancelLessMargin>Cancelar</CancelLessMargin>

            </Container>

        </ScrollContainer>

    )

}