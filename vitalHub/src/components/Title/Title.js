import { Title, TitleName, TitleWelcome } from "./StyleTitle";

export const Title = ({ textTitle }) => {

    return (
        <Title>
            {textTitle}
        </Title>
    )
}

export const NameTitle= ({ textTitle }) => {

    return (
        <TitleName>
            {textTitle}
        </TitleName>
    )
}

export const WelcomeTitle= ({ textTitle }) => {

    return (
        <TitleWelcome>
            {textTitle}
        </TitleWelcome>
    )
}