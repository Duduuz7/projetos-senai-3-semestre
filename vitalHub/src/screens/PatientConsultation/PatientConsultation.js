import { StatusBar } from "react-native"
import { BoxDataHome, BoxHome, ButtonHomeContainer, Container, FlatContainer, MoveIconBell } from "../../components/Container/StyleContainer"
import { Header } from "../../components/Header/StyledHeader"
import { ImagemHome } from "../../components/Images/StyleImages"
import { NameTitle, WelcomeTitle } from "../../components/Title/Title"
import { Ionicons } from '@expo/vector-icons';
import Calendar from "../../components/Calendar/Calendar"

import { FilterButton } from "../../components/Button/Button"
import { useState } from "react"
import { Card } from "../../components/Cards/Cards"
import { CancellationModal } from "../../components/CancellationModal/CancellationModal"

import { FontAwesome6 } from '@expo/vector-icons';
import { Stethoscope } from "../../components/Stethoscope/StyleSthetoscope"


export const PatientConsultation = () => {

    //STATE PARA O ESTADO DOS CARDS FLATLIST, BOTOES FILTRO
    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

    const image = require("../../assets/CardDoctorImage.png");

    // CARD MOCADOS

    const dataItens = [
        {
            id: 1,
            hour: '14:00',
            image: image,
            name: 'Dr Claudio',
            age: '22 anos',
            routine: 'Urgência',
            status: "a"
        }
    ]

    //FILTRO PARA CARD

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

    // STATES PARA OS MODAIS

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    // RETURN

    return (

        <Container>
            <Header>

                <StatusBar translucent backgroundColor="transparent" />

                <BoxHome>

                    <ImagemHome source={require('../../assets/PatientHomeImage.png')} />

                    <BoxDataHome>
                        <WelcomeTitle textTitle={"Bem vindo"} />

                        <NameTitle textTitle={"Richard Kosta"} />
                    </BoxDataHome>

                </BoxHome>


                <MoveIconBell>
                    <Ionicons name="notifications" size={25} color="white" />
                </MoveIconBell>

            </Header>

            <Calendar />

            <ButtonHomeContainer>

                <FilterButton onPress={() => { setSelected({ agendadas: true }) }} selected={selected.agendadas} text={'Agendadas'} />

                <FilterButton onPress={() => { setSelected({ realizadas: true }) }} selected={selected.realizadas} text={'Realizadas'} />

                <FilterButton onPress={() => { setSelected({ canceladas: true }) }} selected={selected.canceladas} text={'Canceladas'} />

            </ButtonHomeContainer>

            <FlatContainer
                data={data}
                renderItem={({ item }) =>
                    <Card hour={item.hour} name={item.name} age={item.age} routine={item.routine} url={image} status={item.status} onPressCancel={() => setShowModalCancel(true)} onPressAppointment={() => setShowModalAppointment(true)} />}

                keyExtractor={item => item.id}

                showsVerticalScrollIndicator={false}

            />

            <Stethoscope onPress={""}>

                <FontAwesome6
                    name="stethoscope"
                    size={32}
                    color={"white"}
                />

            </Stethoscope>

            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            {/* <AppointmentModal 
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />  */}


            {/* <Card url={require('../../assets/ImageCard.png')} name={"Niccole Sarge"} age={"22 anos"} routine={"Rotina"} hour={"14:00"}/>

                <Card url={require('../../assets/ImageCardMale.png')} name={"Richard Kosta"} age={"28 anos"} routine={"Urgência"} hour={"15:00"}/>

                <Card url={require('../../assets/ney.webp')} name={"Neymar Jr"} age={"33 anos"} routine={"Rotina"} hour={"17:00"}/> */}

        </Container>
        
    )
}