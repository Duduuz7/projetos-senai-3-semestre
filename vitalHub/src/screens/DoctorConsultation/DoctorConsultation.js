import { FlatList, StatusBar } from "react-native"
import { BoxDataHome, BoxHome, ButtonHomeContainer, Container, FlatContainer, MoveIconBell, ScrollContainer } from "../../components/Container/StyleContainer"
import { Header } from "../../components/Header/StyledHeader"
import { ImagemHome } from "../../components/Images/StyleImages"
import { NameTitle, WelcomeTitle } from "../../components/Title/Title"
import { Ionicons } from '@expo/vector-icons';
import Calendar from "../../components/Calendar/Calendar"

import { FilterButton } from "../../components/Button/Button"
import { useState } from "react"
import { Card } from "../../components/Cards/Cards"


export const DoctorConsultation = () => {

    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

    const image = require("../../assets/ImageCard.png");

    const dataItens = [
        {
            id: 'fsdfsfsdf',
            hour: '14:00',
            image: image,
            name: 'Niccole Sarge',
            age: '22 anos',
            routine: 'Rotina',
            status: "r"
        },
        {
            id: 'sdfsdf',
            hour: '15:00',
            image: image,
            name: 'Richard Kosta',
            age: '28 anos',
            routine: 'Urgência',
            status: "a"
        },
        {
            id: 'asdas',
            hour: '17:00',
            image: image,
            name: 'Neymar Jr',
            age: '28 anos',
            routine: 'Rotina',
            status: "c"
        }
    ]

    const Check = (data) => {
        if (data.status === "a" && selected.agendadas) {
            return true;
        }
        if (data.status === "r" && selected.realizadas) {
            return true;
        }
        if (data.status === "c" && selected.canceladas) {
            return true;
        }
        return false;
    }

    const data = dataItens.filter(Check);

    return (

        <ScrollContainer>

            <Header>

                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <BoxHome>

                    <ImagemHome source={require('../../assets/DoctorImage.png')} />

                    <BoxDataHome>
                        <WelcomeTitle textTitle={"Bem vindo"} />

                        <NameTitle textTitle={"Dr. Claudio"} />
                    </BoxDataHome>

                </BoxHome>


                <MoveIconBell>
                    <Ionicons name="notifications" size={25} color="white" />
                </MoveIconBell>

            </Header>

            <Container>

                <Calendar />

                <ButtonHomeContainer>

                    <FilterButton onPress={() => { setSelected({ agendadas: true }) }} selected={selected.agendadas} text={'Agendadas'} />

                    <FilterButton onPress={() => { setSelected({ realizadas: true }) }} selected={selected.realizadas} text={'Realizadas'} />

                    <FilterButton onPress={() => { setSelected({ canceladas: true }) }} selected={selected.canceladas} text={'Canceladas'} />

                </ButtonHomeContainer>

                <FlatContainer 
                      data={data}
                      renderItem={({ item }) => 
                      <Card hour={item.hour} name={item.name} age={item.age} routine={item.routine} url={image} status={"b"}/>}
                      keyExtractor={item => item.id} 
                      />

                {/* <Card url={require('../../assets/ImageCard.png')} name={"Niccole Sarge"} age={"22 anos"} routine={"Rotina"} hour={"14:00"}/>

                <Card url={require('../../assets/ImageCardMale.png')} name={"Richard Kosta"} age={"28 anos"} routine={"Urgência"} hour={"15:00"}/>

                <Card url={require('../../assets/ney.webp')} name={"Neymar Jr"} age={"33 anos"} routine={"Rotina"} hour={"17:00"}/> */}

            </Container>

        </ScrollContainer>

    )
}

