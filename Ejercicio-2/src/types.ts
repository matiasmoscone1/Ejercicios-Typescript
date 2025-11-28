
export type RegisterForm = {
    name: string,
    email: string,
    age: number,
    newsletter: boolean
}

export type FormProps = {
    validationFormName: (word: string) => boolean
}