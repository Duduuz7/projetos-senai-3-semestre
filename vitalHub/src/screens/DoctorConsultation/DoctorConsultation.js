import { StatusBar } from "react-native"
import { BoxDataHome, BoxHome, ButtonHomeContainer, Container, MoveIcon, MoveIconBell, ScrollContainer } from "../../components/Container/StyleContainer"
import { Header } from "../../components/Header/StyledHeader"
import { ImagemHome } from "../../components/Logo/StyleLogo"
import { NameTitle, WelcomeTitle } from "../../components/Title/Title"
import { Ionicons } from '@expo/vector-icons';
import Calendar from "../../components/Calendar/Calendar"

import { FilterButton } from "../../components/Button/Button"
import { useState } from "react"
import { Card } from "../../components/CardHome/CardHome"


export const DoctorConsultation = () => {

    const [selected, setSelected] = useState({
        agendadas: true,
        realizadas: false,
        canceladas: false,
    });

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

                <Card url={''} name={"Niccole Sarge"} age={""} routine={""}/>

            </Container>

        </ScrollContainer>

    )
}

{/* <AllDateContainer>

<DateContainer>
    <DayText>
        Dom
    </DayText>
    <DayTextNumber>
        01
    </DayTextNumber>
</DateContainer>

<DateContainer>
    <DayText>
        Seg
    </DayText>
    <DayTextNumber>
        02
    </DayTextNumber>
</DateContainer>

<DateContainer>
    <DayText>
        Ter
    </DayText>
    <DayTextNumber>
        03
    </DayTextNumber>
</DateContainer>

<DateContainer>
    <DayText>
        Qua
    </DayText>
    <DayTextNumber>
        04
    </DayTextNumber>
</DateContainer>

<DateContainer>
    <DayText>
        Qui
    </DayText>
    <DayTextNumber>
        05
    </DayTextNumber>
</DateContainer>

<DateContainer>
    <DayText>
        Sex
    </DayText>
    <DayTextNumber>
        06
    </DayTextNumber>
</DateContainer>

<DateContainer>
    <DayText>
        Sab
    </DayText>
    <DayTextNumber>
        07
    </DayTextNumber>
</DateContainer>

</AllDateContainer> */}
