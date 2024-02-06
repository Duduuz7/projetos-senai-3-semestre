import { InputText } from "./StyleInput";

export function Input({
    placeholder,
    fieldValue,
    onChangeText ,
    keyboardType,
    maxLength,
    placeholderTextColor,
    editable = true
}) {
    return(
        <InputText
        editable={editable}
        placeholder={placeholder}
        keyboardType= {keyboardType}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        value= {fieldValue}
        onChangeText={onChangeText}
        />
    )
}