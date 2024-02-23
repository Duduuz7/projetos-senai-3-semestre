import { HighInput, LargeInput, LargeInputModal, ProfileInput } from "../Input/Input"
import { Label } from "../Label/Label"
import { InputLabelModal } from "../Label/StyleLabel"
import { BoxInput } from "./StyleInputBox"


export const InputBox = ({
    fieldWidth = 100,
    fieldHeight = 90,
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

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

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

export const HighInputBox = ({
    fieldWidth = 100,
    fieldHeight = 90,
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

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <Label textLabel={textLabel}/>

            <HighInput
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

export const LargeInputTextBox = ({
    fieldWidth = 100,
    fieldHeight = 90,
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

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <Label textLabel={textLabel}/>

            <LargeInput
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

export const LargeInputBoxModal = ({
    fieldWidth = 100,
    fieldHeight = 90,
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

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <InputLabelModal>{textLabel}</InputLabelModal>

            <LargeInputModal
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