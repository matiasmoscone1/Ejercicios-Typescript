import { useRef, useState } from "react";
import { RegisterForm, FormProps } from "./types";

const Form = ({validationFormName}: FormProps) => {

    const [form, setForm] = useState<RegisterForm>();

    const refInput = useRef<HTMLInputElement>(null);



    return(<form>
        <div>
            <label>Nombre</label>
            <input ref={refInput} onChange={(e) => {
                if(!validationFormName(e.target.value)){
                    if(refInput.current){
                        refInput.current.style.borderColor = "red";
                    }
                }}}/>
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