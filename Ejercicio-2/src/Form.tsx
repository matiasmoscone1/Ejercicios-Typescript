import { useState } from "react";
import { RegisterForm, FormProps, FlagsForm } from "./types";

const Form = ({validationFormName, validationFormEmail,
            validationFormAge}: FormProps) => {

    const [form, setForm] = useState<RegisterForm>({
        firstname: "",
        email: "",
        age: 0,
        newsletter: false
    });
    const [isValid, setIsValid] = useState<FlagsForm>({
        isValidName: true,
        isValidEmail: true,
        isValidAge: true,
        isValidNewsletter: true
    });

    console.log(form);


    return(<form>
        <div>
            <label>Nombre</label>
            <input className={isValid.isValidName ? "" : "input-error"} onChange={(e) => {
                const valid = validationFormName(e.target.value);
                console.log(valid);
                setIsValid((prev) => ({...prev, isValidName: valid}));
                setForm((prev) => ({...prev, firstname: e.target.value}))}}/>
        </div>
        <div>
            <label>Email</label>
            <input className={isValid.isValidEmail ? "" : "input-error"} onChange={(e) => {
                const valid = validationFormEmail(e.target.value);
                setIsValid((prev) => ({...prev, isValidEmail: valid}));
                setForm((prev) => ({...prev, email: e.target.value}));
            }}/>
        </div>
        <div>
            <label>Edad</label>
            <input className={isValid.isValidAge ? "" : "input-error"} onChange={(e) => {
                const valid = validationFormAge(Number(e.target.value));
                setIsValid((prev) => ({...prev, isValidAge: valid}));
            }} />
        </div>
        <div>
            <label>Cv</label>
            <input type="checkbox" onChange={(e) => setIsValid((prev) => ({...prev, isValidNewsletter: e.target.checked}))}/>
        </div>
        <button type="submit" onClick={(e) => e.preventDefault()}>Enviar</button>
    </form>);

}

export default Form;