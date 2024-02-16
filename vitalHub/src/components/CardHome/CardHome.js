
import { BoxCard, BoxDateCancel, BoxTextCard } from "../Container/StyleContainer"
import { DateConsult } from "../DateConsult/DateConsult"
import { ConsultDate } from "../DateConsult/StyleDateConsult"
import { AgeTextCard, CancelCard, HourText, RoutineTextCard } from "../Descriptions/StyledDescriptions"
import { ImageCard, PointCard } from "../Logo/StyleLogo"
import { NameCard, Title } from "../Title/StyleTitle"
import { AgeCard, CardContainer } from "./StyleCardHome"

import { FontAwesome6 } from '@expo/vector-icons';



export const Card = ({url, name, age, routine}) => {

    return (

        <CardContainer>

            <BoxCard>

                <ImageCard source={require(url)} />

                <BoxTextCard>

                    <NameCard>{name}</NameCard>

                    <AgeCard>

                        <AgeTextCard>{age}</AgeTextCard>

                        <PointCard source={require('../../assets/PointCard.png')} />

                        <RoutineTextCard>{routine}</RoutineTextCard>

                    </AgeCard>

                    <BoxDateCancel>

                        <ConsultDate>

                            <FontAwesome6 name="clock" size={15} color="#49B3BA" />

                            <HourText>{hour}</HourText>

                        </ConsultDate>

                        <CancelCard>Cancelar</CancelCard> 

                    </BoxDateCancel>

                </BoxTextCard>

            </BoxCard>

        </CardContainer>

    )


}