import style from "./TextInput.module.scss";
import { TextInputProps } from "./TextInput.types";

export function TextInput({ id, label, placeholder }: TextInputProps) {
    return (
        <div className={style.textInput}>
            <label htmlFor={id}>{label}</label>
            <input type="text" name={id} id={id} placeholder={placeholder} />
        </div>
    );
}
