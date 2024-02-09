import { ButtonText, ButtonTextGoogle } from "../ButtonText/StyleButtonText";
import { ButtonBlocked, GoogleButton, LargeButton, NormalButton, SmallButtonBlocked } from "./StyleButton";
import { AntDesign } from '@expo/vector-icons';

export const ButtonNormal = ({
    onPress,
    text
}) => {
    return (
        <NormalButton
            onPress={onPress}>
                <ButtonText>{text}</ButtonText>
        </NormalButton>
    );
}

export const ButtonGoogle = ({
    onPress,
    text
}) => {
    return (
        <GoogleButton
            onPress={onPress}>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTextGoogle>{text}</ButtonTextGoogle>
        </GoogleButton>
    );
}

export const ButtonLarge = ({
    onPress,
    text
}) => {
    return (
        <LargeButton
            onPress={onPress}>
                <ButtonText>{text}</ButtonText>
        </LargeButton>
    );
}

export const BlockedButton = ({
    onPress,
    text
}) => {
    return (
        <ButtonBlocked
            onPress={onPress}>
                <ButtonText>{text}</ButtonText>
        </ButtonBlocked>
    );
}

export const BlockedSmallButton = ({
    onPress,
    text
}) => {
    return (
        <SmallButtonBlocked
            onPress={onPress}>
                <ButtonText>{text}</ButtonText>
        </SmallButtonBlocked>
    );
}