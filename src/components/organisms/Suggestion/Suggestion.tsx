import { Button, Content } from "@/components/atoms";
import style from "./Suggestion.module.scss";
import { SuggestionProps } from "./Suggestion.types";

export function Suggestion({
    title,
    content,
    orientation,
    button,
    children,
}: SuggestionProps) {
    return (
        <section
            className={`${style.suggestion} ${
                orientation === "right" && style["suggestion--right"]
            } wrapper`}
        >
            {children}
            <article className={style.suggestion__right}>
                <Content title={title}>{content && <p>{content}</p>}</Content>
                {button && <Button text={button.text} href={button.href} />}
            </article>
        </section>
    );
}
