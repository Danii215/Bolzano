import style from "./Message.module.scss";
import { MessageProps } from "./Message.types";

export function Message({ message, success }: MessageProps) {
    return (
        <div
            className={`${style.message} ${
                success && style["message--success"]
            }`}
        >
            <p>{message}</p>
        </div>
    );
}
