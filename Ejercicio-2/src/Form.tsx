import { useState } from "react";
import { RegisterForm, FormProps, FlagsForm } from "./types";

const Form = ({validationFormName, validationFormEmail}: FormProps) => {

    const [form, setForm] = useState<RegisterForm>();
    const [isValid, setIsValid] = useState<FlagsForm>({
        isValidName: true,
        isValidEmail: true,
        isValidAge: true,
        isValidNewsletter: true
    });



    return(<form>
        <div>
            <label>Nombre</label>
            <input className={isValid.isValidName ? "" : "input-error"} onChange={(e) => {
                const valid = validationFormName(e.target.value);
                console.log(valid);
                setIsValid((prev) => ({...prev, isValidName: valid}))}}/>
        </div>
        <div>
            <label>Email</label>
            <input />
        </div>
        <div>
            <label>Edad</label>
            <input  />
        </div>
        <div>
            <label>Cv</label>
            <input  />
        </div>
        <button type="submit" onClick={(e) => e.preventDefault()}>Enviar</button>
    </form>);

}

export default Form;