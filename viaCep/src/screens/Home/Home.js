import { ContainerForm, ScrollForm, ViewEstadoUf } from "./StyleHome";
import { BoxInput } from "../../components/BoxInput/BoxInput";
import { useEffect, useState } from "react";
import api from "../../services/Services";
import axios from "axios";

export function Home() {

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cidade, setCidade] = useState('');


    useEffect(() => {

        const getCep = async () => {
            if (cep !== "" && cep.length === 8) {
                try {
                    const response = await api.get(`${cep}/json/`);

                    if (response.data) {

                        setLogradouro(response.data.logradouro);
                        setCidade(response.data.localidade);

                    } else {

                        alert("Verifique o CEP digitado !!!");

                    }
                } catch (error) {

                    console.log("Ocorreu um erro ao buscar o CEP", error);

                }
            }
        };

        getCep();

    }, [cep]);


    return (


        <ScrollForm>

            <ContainerForm>

                <BoxInput
                    textLabel={"Informar o CEP :"}
                    placeholder={"Digite o CEP"}
                    keyboardType="numeric"
                    maxLength={8}
                    onChangeText={text => setCep(text)}
                    editable={true}
                    fieldValue={cep}
                />

                <BoxInput
                    textLabel={"Logradouro :"}
                    placeholder={"Logradouro..."}
                    fieldValue={logradouro}
                />

                <BoxInput
                    textLabel={"Bairro :"}
                    placeholder={"Bairro..."}
                    fieldValue={bairro}
                />

                <BoxInput
                    textLabel={"Cidade :"}
                    placeholder={"Cidade..."}
                    fieldValue={cidade}
                />

                <ViewEstadoUf>
                    <BoxInput
                        textLabel={"Estado :"}
                        placeholder={"Estado..."}
                        fieldWidth={60}
                        fieldValue={estado}
                    />

                    <BoxInput
                        textLabel={"UF :"}
                        placeholder={"UF..."}
                        fieldWidth={28}
                        fieldValue={uf}
                    />

                </ViewEstadoUf>

            </ContainerForm>

        </ScrollForm>
    )
}