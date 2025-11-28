
export type RegisterForm = {
    firstname: string,
    email: string,
    age: number,
    newsletter: boolean
}
export type FlagsForm = {
    isValidName: boolean,
    isValidEmail: boolean,
    isValidAge: boolean,
    isValidNewsletter: boolean
}

export type FormProps = {
    validationFormName: (word: string) => boolean,
    validationFormEmail: (word: string) => boolean,
    validationFormAge: (num: number) => boolean,

}