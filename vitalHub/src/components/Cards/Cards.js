
import { BoxCard, BoxDateCancel, BoxTextCard } from "../Container/StyleContainer"
import { ConsultDate } from "../DateConsult/StyleDateConsult"
import { AgeTextCard, CancelCard, DescripritionForgot, DoctorArea, HourText, RoutineTextCard } from "../Descriptions/StyledDescriptions"
import { ImageCard, PointCard } from "../Images/StyleImages"
import { NameCard, NameCardSelect, Title } from "../Title/StyleTitle"
import { AgeCard, CardContainer } from "./StyleCards"

import { FontAwesome6 } from '@expo/vector-icons';



export const Card = ({ url, name, age, routine, hour, status }) => {

    const Check = () => {

        if (status === "a") {
            return (
                <BoxDateCancel>

                    <ConsultDate>

                        <FontAwesome6 name="clock" size={15} color="#49B3BA" />

                        <HourText>{hour}</HourText>

                    </ConsultDate>

                    <CancelCard>Cancelar</CancelCard>

                </BoxDateCancel>
            )


        } else if (status === "r") {

            return (
                <></>
            )
        }
        else if (status === "c") {
            return (
                <BoxDateCancel>

                    <ConsultDate>

                        <FontAwesome6 name="clock" size={15} color="gray" />

                        <HourText>{hour}</HourText>

                    </ConsultDate>

                    <CancelCard>Cancelar</CancelCard>

                </BoxDateCancel>
            )

        }

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

            {/* {Check()} */}

        </CardContainer>

    )
}

export const CardSelectDoctor = ({ url, name, doctorArea }) => {

    return (

        <CardContainer>
            <ImageCard source={url} />

            <BoxCard>

                <BoxTextCard>
                    <NameCardSelect>{name}</NameCardSelect>

                    <DoctorArea>{doctorArea}</DoctorArea>
                </BoxTextCard>

            </BoxCard>

        </CardContainer>

    )

}