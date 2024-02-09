import { Container, ScrollContainer } from "../../components/Container/StyleContainer"
import { Header } from "../../components/Header/StyledHeader"
import { ImagemHomeDoctor } from "../../components/Logo/StyleLogo"
import { NameTitle } from "../../components/Title/Title"



export const DoctorConsultation = () => {
    return (

        <ScrollContainer>

            <Container>

                <Header> 
                    <ImagemHomeDoctor/> 

                    {/* <NameTitle></NameTitle> */}
                </Header>

            </Container>

        </ScrollContainer>

    )
}