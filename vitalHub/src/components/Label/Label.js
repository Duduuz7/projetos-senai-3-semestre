import { InputLabel, InputLabelSelect } from "./StyleLabel"

export const Label = ({ textLabel }) => {

    return (
        <InputLabel>
            {textLabel}
        </InputLabel>
    )
}

export const LabelSelect = ({ textLabel }) => {

    return (
        <InputLabelSelect>
            {textLabel}
        </InputLabelSelect>
    )
}