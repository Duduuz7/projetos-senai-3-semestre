import { InputNumeric, InputText } from "./StyleInput";

export function Input({
    placeholder,
    fieldValue,
    onChangeText ,
    keyboardType,
    maxLength,
    placeholderTextColor,
    editable = true,
    secureTextEntry = false
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
        secureTextEntry={secureTextEntry}
        />
    )
}


export function NumericInput({
    placeholder,
    fieldValue,
    onChangeText ,
    keyboardType = 'numeric',
    maxLength,
    placeholderTextColor,
    editable = true
}) {
    return(
        <InputNumeric
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