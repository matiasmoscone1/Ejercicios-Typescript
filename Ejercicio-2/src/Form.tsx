import { useRef, useState } from "react";
import { RegisterForm, FormProps } from "./types";

const Form = ({validationFormName}: FormProps) => {

    const [form, setForm] = useState<RegisterForm>();
    const [isValid, setIsValid] = useState(true);

    const refInput = useRef<HTMLInputElement>(null);



    return(<form>
        <div>
            <label>Nombre</label>
            <input ref={refInput} className={isValid ? "" : "input-error"} onChange={(e) => {
                const valid = validationFormName(e.target.value);
                setIsValid(valid)}}/>
        </div>
        <div>
            <label>Email</label>
            <input  />
        </div>
        <div>
            <label>Edad</label>
            <input  />
        </div>
        <div>
            <label>Cv</label>
            <input  />
        </div>
    </form>);

}

export default Form;