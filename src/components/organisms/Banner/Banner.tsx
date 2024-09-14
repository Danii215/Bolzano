import { BannerProps } from "./Banner.types";
import style from "./Banner.module.scss";
import { PageTitle } from "@/components/atoms";

export function Banner({ text, children }: BannerProps) {
    return (
        <section className={style.banner}>
            <div className="wrapper">
                <PageTitle
                    title={text.title}
                    titleHighlight={text.titleHighlight}
                    subtitle={text.subtitle}
                />
                {children}
            </div>
        </section>
    );
}
