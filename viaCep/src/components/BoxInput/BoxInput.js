import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
import { FieldContent } from "./StyleBoxInput"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onchangeText = null,
    keyTitle = "default",
    maxLength
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input 
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyTitle}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onchangeText={onchangeText}
            />

        </FieldContent>

    )
}