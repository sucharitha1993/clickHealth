// form validation regular expressions
interface AppRegExpressionsList {
    email: RegExp,
    mobile: RegExp,
    nameValidator: RegExp,
    pincode: RegExp
    alphabetonly: RegExp,
    acceptNumeric: RegExp,
}

// form validation regular expressions
export const AppRegExpressionsConfig: AppRegExpressionsList = {
    mobile: /^[6-9][0-9]{9}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    nameValidator: /^[a-zA-Z]+[a-zA-Z\s]*$/,
    alphabetonly: /^[a-zA-Z\s]*$/,
    acceptNumeric: /^[0-9]+$/,
    pincode: /^[0-9]{6}$/
}