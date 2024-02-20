
import { BoxCard, BoxDateCancel, BoxTextCard, BoxTextDoctorCard } from "../Container/StyleContainer"
import { ConsultDate, ConsultDateGray, ConsultDateGrey } from "../DateConsult/StyleDateConsult"
import { CardCancel, SeeRecord } from "../Descriptions/Descriptions"
import { AgeTextCard, CancelCard, DescripritionForgot, DoctorArea, HourText, HourTextGray, HourTextGrey, RoutineTextCard, SeeMedicalRecord } from "../Descriptions/StyledDescriptions"
import { ImageCard, PointCard } from "../Images/StyleImages"
import { NameCard, NameCardSelect, Title } from "../Title/StyleTitle"
import { AgeCard, CardContainer } from "./StyleCards"

import { FontAwesome6 } from '@expo/vector-icons';



export const Card = ({ url, name, age, routine, hour, status, onPressCancel }) => {

    const Check = () => {

        if (status === "a") {
            return (
                <BoxDateCancel>

                    <ConsultDate>

                        <FontAwesome6 name="clock" size={15} color="#49B3BA" />

                        <HourText>{hour}</HourText>

                    </ConsultDate>

                    <CardCancel onPressCancel={onPressCancel} text={"Cancelar"}/>

                </BoxDateCancel>
            )


        } else if (status === "r") {
            return (
                <BoxDateCancel>

                    <ConsultDateGray>

                        <FontAwesome6 name="clock" size={15} color="#4E4B59" />

                        <HourTextGray>{hour}</HourTextGray>

                    </ConsultDateGray>

                    <SeeRecord onPressAppointment={""} text={"Ver Prontuário"}/>

                </BoxDateCancel>
            )
        }
        else if (status === "c") {
            return (
                <BoxDateCancel>

                    <ConsultDateGray>

                        <FontAwesome6 name="clock" size={15} color="#4E4B59" />

                        <HourTextGray>{hour}</HourTextGray>

                    </ConsultDateGray>

                </BoxDateCancel>
            )

        }
        // return (
        //     <BoxDateCancel>

        //     <ConsultDateGrey>

        //         <FontAwesome6 name="clock" size={15} color="#4E4B59" />

        //         <HourTextGrey>{hour}</HourTextGrey>

        //     </ConsultDateGrey>

        //     <CancelCard>Ver Prontuario</CancelCard>

        // </BoxDateCancel>
        // )

    }

    return (

        <CardContainer>

            <BoxCard>

                <ImageCard source={url} />

                <BoxTextCard>

                    <NameCard>{name}</NameCard>

                    <AgeCard>

                        <AgeTextCard>{age}</AgeTextCard>

                        <PointCard source={require('../../assets/PointCard.png')} />

                        <RoutineTextCard>{routine}</RoutineTextCard>

                    </AgeCard>

                    {Check()}

                </BoxTextCard>

            </BoxCard>

        </CardContainer>

    )
}

export const CardSelectDoctor = ({ url, name, doctorArea }) => {

    return (

        <CardContainer>
            <ImageCard source={url} />

            <BoxCard>

                <BoxTextDoctorCard>
                    <NameCardSelect>{name}</NameCardSelect>

                    <DoctorArea>{doctorArea}</DoctorArea>
                </BoxTextDoctorCard>

            </BoxCard>

        </CardContainer>

    )

}