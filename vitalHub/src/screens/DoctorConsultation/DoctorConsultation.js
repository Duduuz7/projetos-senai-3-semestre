import { StatusBar } from "react-native"
import { AllDateContainer, BoxDataHome, BoxHome, ButtonHomeContainer, Container, DateContainer, MoveIcon, MoveIconBell, ScrollContainer } from "../../components/Container/StyleContainer"
import { Header } from "../../components/Header/StyledHeader"
import { IconBell, ImagemHome } from "../../components/Logo/StyleLogo"
import { NameTitle, WelcomeTitle } from "../../components/Title/Title"
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient"
import { TitleMonth } from "../../components/Title/StyleTitle"
import { DayText, DayTextNumber } from "../../components/Descriptions/StyledDescriptions"
import { HomeButton, WhiteHomeButton } from "../../components/Button/Button"
import { WhiteButtonHome } from "../../components/Button/StyleButton"


export const DoctorConsultation = () => {
    return (

        <ScrollContainer>
            <Container>

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

                <TitleMonth>Novembro 2023</TitleMonth>

                <AllDateContainer>

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

                </AllDateContainer>

                <ButtonHomeContainer>

                    <HomeButton text={"Agendadas"} />

                    <WhiteHomeButton text={"Realizadas"} />

                    <WhiteHomeButton text={"Canceladas"} />

                </ButtonHomeContainer>

            </Container>
        </ScrollContainer>

    )
}