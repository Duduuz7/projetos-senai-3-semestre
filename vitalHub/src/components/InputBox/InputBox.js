import { HighInput, Input, LargeInput, LargeInputModal, LargeInputPrescription, ProfileInput } from "../Input/Input"
import { HighInputPrescription, HighInputPrescriptionImage } from "../Input/StyleInput"
import { Label, LabelPrescription } from "../Label/Label"
import { InputLabelModal, InputPrescription } from "../Label/StyleLabel"
import { BoxInput, FieldContent } from "./StyleInputBox"


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

            <Label textLabel={textLabel} />

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

            <Label textLabel={textLabel} />

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

            <Label textLabel={textLabel} />

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

export const BoxInput2 = ({
    fieldWidth = 100,
    customHeight = 53,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength,
    customP,
    multiline,
    numberOfLines,


}) => {
    return (
        // "conteúdo do campo" tipo a div sabe?
        <FieldContent fieldWidth={fieldWidth}>
            {/* label e input */}

            <InputPrescription>{textLabel}</InputPrescription>

            <ProfileInput
                numberOfLines={numberOfLines}
                multiline={multiline}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                customHeight={customHeight}
                customP={customP}
            />

        </FieldContent>

    )
}


export const LargeInputBoxPrescription = ({
    fieldWidth = 90,
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