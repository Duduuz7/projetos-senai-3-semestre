import { ContainerForm, ScrollForm, ViewEstadoUf } from "./StyleHome";
import { BoxInput } from "../../components/BoxInput/BoxInput";

export function Home() {

    return (
        <ScrollForm>

            <ContainerForm>

                <BoxInput
                    textLabel={"Informar o CEP :"}
                    placeholder={"Digite o CEP"}
                    keyTitle="numeric"
                    maxLength={9}
                />

                <BoxInput
                    textLabel={"Logradouro :"}
                    placeholder={"Logradouro..."}
                />

                <BoxInput
                    textLabel={"Bairro :"}
                    placeholder={"Bairro..."}
                />

                <BoxInput
                    textLabel={"Cidade :"}
                    placeholder={"Cidade..."}
                />

                <ViewEstadoUf>
                    <BoxInput
                        textLabel={"Estado :"}
                        placeholder={"Estado..."}
                        fieldWidth={60}
                    />

                    <BoxInput
                        textLabel={"UF :"}
                        placeholder={"UF..."}
                        fieldWidth={28}
                    />

                </ViewEstadoUf>

            </ContainerForm>

        </ScrollForm>
    )
}