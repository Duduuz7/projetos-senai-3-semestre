import { Linking } from "react-native"
import { TextMedium } from "./StyleTextMedium"
import { ViewBoxMedium } from "../Container/StyleContainer"


export const LinkMedium = ({ textLink, url }) => {

    return (
        <ViewBoxMedium>
            <TextMedium onPress={() => { Linking.openURL(`${url}`) }}>
                {textLink}
            </TextMedium>
        </ViewBoxMedium>
    )
}