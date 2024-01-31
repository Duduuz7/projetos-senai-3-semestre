import { ContainerHeader, MainTitle, SafeContainer } from "./style";

export function Header(){
    return(
        <ContainerHeader>
            <SafeContainer>
                <MainTitle>Consumo da API ViaCep</MainTitle>
            </SafeContainer>
        </ContainerHeader>
    )
}