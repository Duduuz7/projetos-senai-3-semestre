import { ContainerForm, ScrollForm, ViewEstadoUf } from "./StyleHome";
import { BoxInput } from "../../components/BoxInput/BoxInput";
import { useEffect, useState } from "react";
import api from "../../services/Services";

export function Home() {

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

    useEffect(() => {

        const Get = async () => {
            try {

                if (cep != "" && cep.length === 8) {
                    const response = await api.get(`${cep}`);

                    if (response.error) {
                        alert("Verifique o CEP !!!")
                        return
                    }
                    

                    setLogradouro(response.data.logradouro);
                    setBairro(response.data.bairro);
                    setCidade(response.data.localidade);
                    setEstado(response.data.uf);
                    setUf(response.data.uf);

                }
            } catch (error) {
                console.log("Erro.");
                console.log(error);
            }
        }

        Get()
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