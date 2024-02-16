import { ImageCard } from "../Logo/StyleLogo"
import { CardContainer } from "./StyleCardHome"


export const Card = () => {
    
    return(

        <CardContainer>

            <BoxCard>

                <ImageCard />

                <NameCard/>

                <BoxTextCard>

                    <AgeCard></AgeCard>

                </BoxTextCard>

                <BoxDateCancel>

                    

                </BoxDateCancel>

            </BoxCard>

        </CardContainer>

    )


}