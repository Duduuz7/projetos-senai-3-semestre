import { InputText } from "./StyleInput";

export function Input({
    placeholder,
    fieldValue,
    onChangeText ,
    keyboardType,
    maxLength,
    editable
}) {
    return(
        <InputText
        editable={editable}
        placeholder={placeholder}
        keyboardType= {keyboardType}
        maxLength={maxLength}
        value= {fieldValue}
        onChangeText={onChangeText}
        />
    )
}