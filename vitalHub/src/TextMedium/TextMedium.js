import { Linking } from "react-native"
import { TextMedium } from "./StyleTextMedium"

export const LinkMedium = ({ textLink, url }) => {

    return (
        <TextMedium onPress={() => {Linking.openURL(`${url}`)}}>
            {textLink}
        </TextMedium>
    )
}