
type RequiredFieldType = (value: string) => string | undefined;

export const requiredField: RequiredFieldType = (value) => {
    if(value) return undefined;
    return 'Field is required';
}


export const maxLengthCreater = (maxLength: number):RequiredFieldType => (value) => {
    if(value && value.length <= maxLength){
        return undefined;
    } else {
        return `Max length should be ${maxLength}`
    }
}