import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
import { FieldContent } from "./StyleBoxInput"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input 
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />

        </FieldContent>

    )
}