import { ProfileInput } from "../Input/Input"
import { Label } from "../Label/Label"
import { BoxInput } from "./StyleInputBox"


export const InputBox = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput fieldWidth={fieldWidth} textLabel={textLabel}>

            <Label textLabel={textLabel}/>

            <ProfileInput
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </BoxInput>

    )
}