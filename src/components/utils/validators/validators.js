
export const requiredField = (value) => {
    if(value) return undefined;
    return 'Field is required';
}


export const maxLengthCreater = (maxLength) => (value) => {
    if(value && value.length <= maxLength){
        return undefined;
    } else {
        return `Max length should be ${maxLength}`
    }
}