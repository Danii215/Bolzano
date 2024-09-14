import style from "./PageTitle.module.scss";
import { PageTitleProps } from "./PageTitle.types";

export function PageTitle({ title, titleHighlight, subtitle }: PageTitleProps) {
    return (
        <section className={style.pagetitle}>
            <h2>
                {title}
                <br />
                <span>{titleHighlight}</span>
            </h2>
            <p>{subtitle}</p>
        </section>
    );
}
